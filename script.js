const themeToggle = document.getElementById("theme-toggle");

// Function to apply the theme based on the saved preference
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("darkmode");
    themeToggle.src = "images/sun.svg";
  } else {
    document.body.classList.remove("darkmode");
    themeToggle.src = "images/moon.svg";
  }
}

// Function to toggle the theme and save the preference
function toggleTheme() {
  const currentTheme =
    localStorage.getItem("theme") === "dark" ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
}

// On page load, apply the saved theme
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  themeToggle.onclick = () => {
    toggleTheme();
  };
});
