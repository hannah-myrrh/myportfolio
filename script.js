// 🌙 Dark/Light Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");

  // Change button text
  if (body.classList.contains("dark-theme")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});

// ✏️ Editable About Section
const editBtn = document.getElementById("edit-about");
const aboutText = document.getElementById("about-text");
let isEditing = false;

editBtn.addEventListener("click", () => {
  if (!isEditing) {
    aboutText.contentEditable = "true";
    aboutText.focus();
    editBtn.textContent = "💾 Save";
    isEditing = true;
  } else {
    aboutText.contentEditable = "false";
    editBtn.textContent = "✏️ Edit";
    isEditing = false;
  }
});
