# JS Practice Platform

An interactive JavaScript coding platform for practicing interview-style coding problems in the browser. Built with CodeMirror, this tool supports live code editing, linting, formatting, theming, and saving progress locally.

## 🚀 Features

- ✅ Question-based code practice
- 🎯 Code formatting using `js-beautify`
- 🌙 Theme switcher (Light / Dracula)
- 🧠 Code linting and autocomplete
- 💾 Save your code (stored in browser's localStorage)
- ▶️ Run JS code and see live output
- ⚡ Responsive and clean UI

## 🛠️ Technologies Used

- HTML5, CSS3, JavaScript
- [CodeMirror](https://codemirror.net/) for rich text editor
- `js-beautify` for formatting
- `JSHint` for linting
- LocalStorage for saving user code

## 📸 Screenshot

![JS Practice Platform UI](screenshot.png)

## 📂 Folder Structure

js-practice-platform/
├── index.html
├── style.css
├── script.js
├── components/
│ └── editor.js
├── data/
│ └── questions.js
├── utils/
│ ├── runner.js
│ └── storage.js
