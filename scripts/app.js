
const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  toggleBtn.textContent = body.classList.contains("light") ? "☀️" : "🌙";
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
  { name: "Excel", logo: "https://tse3.mm.bing.net/th/id/OIP.u6xMPdUAO5q0Pw_0_UTK8wHaGa?pid=ImgDet&w=178&h=154&c=7&dpr=1%D9%AB5&o=7&rm=3" },
  { name: "Power BI", logo: "https://vectorseek.com/wp-content/uploads/2023/09/Power-BI-Icon-Logo-Vector.svg-.png" },
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

  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let starsArray = [];

  class Star {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2;
      this.speed = Math.random() * 0.5;
      this.opacity = Math.random();
      this.fade = Math.random() * 0.02;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 500, 255, ${this.opacity})`;
      ctx.fill();
      }

    update() {
      this.y -= this.speed;

      this.opacity += this.fade;
      if (this.opacity <= 0 || this.opacity >= 1) {
        this.fade = -this.fade;
      }

      if (this.y < 0) {
        this.y = canvas.height;
        this.x = Math.random() * canvas.width;
      }

      this.draw();
    }
  }

  function init() {
    starsArray = [];
    for (let i = 0; i < 150; i++) {
      starsArray.push(new Star());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    starsArray.forEach(star => star.update());
    requestAnimationFrame(animate);
  }

  init();
  animate();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  });

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active'); 
    } else {
      entry.target.classList.remove('active'); 
    }
  });
}, {
  threshold: 0.1 
});

reveals.forEach(el => observer.observe(el));

