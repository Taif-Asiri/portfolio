const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleBtn.textContent = body.classList.contains("dark") ? "Light mode☀️" : "Dark mode🌙";
});
const buttons = document.querySelectorAll(".read-more-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    const moreText = card.querySelector(".more-text");

    moreText.classList.toggle("hidden");

    if (moreText.classList.contains("hidden")) {
      btn.textContent = "Read more";
    } else {
      btn.textContent = "Read less";
    }
  });
});
// Toggle Dark Mode - MDN  Web Docs -Add Event Listner
// Read More Button - MDN  Web Docs  - Document querySelectorAll



