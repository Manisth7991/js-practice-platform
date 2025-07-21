function runUserCode(userCode) {
  const logs = [];

  const customConsole = {
    log: (...args) => logs.push("🟢 " + args.join(" ")),
    error: (...args) => logs.push("🔴 " + args.join(" "))
  };

  try {
    const wrappedCode = `
      (function(console){
        try {
          ${userCode}
        } catch (innerErr) {
          console.error(innerErr.message);
        }
      })(customConsole);
    `;

    eval(wrappedCode);

    return logs.length ? logs.join("\n") : "✅ Code executed (No output)";
  } catch (error) {
    return `❌ Error: ${error.message}`;
  }
}
