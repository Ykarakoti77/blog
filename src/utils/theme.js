function toggleDarkMode() {
  const html = document.documentElement;
  html.classList.toggle("dark");
  console.log("Toggling dark mode", html.classList.contains("dark"));
  localStorage.setItem(
    "theme",
    html.classList.contains("dark") ? "dark" : "light"
  );
}

export default toggleDarkMode;
