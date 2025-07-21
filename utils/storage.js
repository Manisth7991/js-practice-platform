// Save solution to localStorage
function saveSolution(questionId, code) {
  try {
    if (typeof questionId !== "number") throw new Error("Invalid question ID");
    localStorage.setItem(`code-${questionId}`, code);
  } catch (err) {
    console.error("Failed to save solution:", err.message);
  }
}

// Load saved solution from localStorage
function loadSolution(questionId) {
  try {
    if (typeof questionId !== "number") throw new Error("Invalid question ID");
    return localStorage.getItem(`code-${questionId}`) || null;
  } catch (err) {
    console.error("Failed to load solution:", err.message);
    return null;
  }
}

// Optional: Remove solution
function removeSolution(questionId) {
  try {
    localStorage.removeItem(`code-${questionId}`);
  } catch (err) {
    console.error("Failed to remove solution:", err.message);
  }
}

// Optional: Clear all saved code (use with caution)
function clearAllSolutions() {
  try {
    for (let key in localStorage) {
      if (key.startsWith("code-")) {
        localStorage.removeItem(key);
      }
    }
  } catch (err) {
    console.error("Failed to clear solutions:", err.message);
  }
}
