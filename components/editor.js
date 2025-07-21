let editor;

function getCurrentTheme() {
  const themeSelectEl = document.getElementById("theme-select");
  return themeSelectEl?.value || "default";
}

function initEditor(code = "", theme = getCurrentTheme()) {
  const editorContainer = document.getElementById("editor");

  // ✅ Clear previous editor if it exists
  if (editor) {
    editor.toTextArea?.(); // cleanup old instance
    editor = null;
    editorContainer.innerHTML = ""; // clear container
  }

  // ✅ Create a new CodeMirror instance
  editor = CodeMirror(editorContainer, {
    value: code,
    mode: "javascript",
    theme: theme,
    lineNumbers: true,
    lint: true,
    gutters: ["CodeMirror-lint-markers"],
    tabSize: 2,
    indentUnit: 2,
    matchBrackets: true,
    extraKeys: {
      "Ctrl-Space": "autocomplete",
      "Ctrl-/": "toggleComment",
    },
  });

  // ✅ IMPORTANT: Refresh and focus after DOM render
  setTimeout(() => {
    editor.refresh();   // 🟩 ensures proper formatting/rendering
    editor.focus();     // optional: bring editor in focus
  }, 0);
}

function getEditorValue() {
  return editor?.getValue();
}

function setEditorTheme(theme) {
  if (editor) {
    editor.setOption("theme", theme);
    editor.refresh();  // 🔄 ensures formatting after theme switch
  }
}

function formatEditorCode() {
  if (!editor) return;

  const unformatted = editor.getValue();
  const formatted = js_beautify(unformatted, {
    indent_size: 2,
    space_in_empty_paren: true,
  });
  editor.setValue(formatted);
}
