// Example: Alert when clicking a nav link
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => alert("Navigating to article..."));
});
