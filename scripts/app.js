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
const skills = [
  { name: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
  { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Django", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" },
  { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
  { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
];

const container = document.querySelector(".skills-random-container");

skills.forEach(skill => {
  const div = document.createElement("div");
  div.classList.add("skill-item");
  div.innerHTML = `<img src="${skill.logo}" alt="${skill.name} Logo"><p>${skill.name}</p>`;
  
 
  const x = Math.random() * (container.offsetWidth - 50);
  const y = Math.random() * (container.offsetHeight - 50);
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  
  container.appendChild(div);
});

// Toggle Dark Mode - MDN  Web Docs -Add Event Listner
// Read More Button - MDN  Web Docs  - Document querySelectorAll



