const themeToggle = document.getElementById("theme-toggle");

themeToggle.onclick = () => {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    themeToggle.src = "images/sun.svg";
  } else {
    themeToggle.src = "images/moon.svg";
  }
};
