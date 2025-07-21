const questionListEl = document.getElementById("question-list");
const editorSection = document.getElementById("editor-section");
const titleEl = document.getElementById("question-title");
const descEl = document.getElementById("question-desc");
const outputEl = document.getElementById("output");
const themeSelectEl = document.getElementById("theme-select");

let currentQuestion = null;
let currentTheme = themeSelectEl.value || "default";

// Load questions
function loadQuestions() {
  questions.forEach((q) => {
    const btn = document.createElement("button");
    btn.textContent = q.title;
    btn.onclick = () => loadQuestion(q);
    questionListEl.appendChild(btn);
  });
}

// Load selected question
function loadQuestion(q) {
  currentQuestion = q;
  titleEl.textContent = q.title;
  descEl.textContent = q.description;

  // 🧹 Clear previous editor DOM before creating new one
  const editorContainer = document.getElementById("editor");
  if (editorContainer) {
    editorContainer.innerHTML = "";
  }

  let codeToLoad;

  // ✅ Always load starter code for playground (don't use saved code)
  if (q.id === 3) {
    codeToLoad = q.starterCode;
  } else {
    const saved = loadSolution(q.id);
    codeToLoad = saved || q.starterCode;
  }

  initEditor(codeToLoad, currentTheme);
  editorSection.style.display = "block";
  outputEl.textContent = "";

  // ✅ Hide "Save Code" for Playground
  document.getElementById("save-code").style.display = q.id === 3 ? "none" : "inline-block";
}

// Run Code
document.getElementById("run-code").onclick = () => {
  if (!currentQuestion) return;
  const userCode = getEditorValue();
  const result = runUserCode(userCode);
  outputEl.textContent = result;
};

// Save Code
document.getElementById("save-code").onclick = () => {
  if (!currentQuestion || currentQuestion.id === 3) return; // ❌ Prevent saving Playground code
  const code = getEditorValue();
  saveSolution(currentQuestion.id, code);
  alert("✅ Solution saved!");
};

// Format Code
document.getElementById("format-code").onclick = () => {
  formatEditorCode();
};

// Theme Change
themeSelectEl.addEventListener("change", (e) => {
  currentTheme = e.target.value;
  setEditorTheme(currentTheme);
});

// Initial Load
loadQuestions();
