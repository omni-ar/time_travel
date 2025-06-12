// Highlight nav link on page load
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Fade in animation handled by CSS on load (no JS needed here)
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form validation and submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been received.`);
    this.reset();
  });
}

function validateEmail(email) {
  // Simple email validation regex
  return /\S+@\S+\.\S+/.test(email);
}

// Ripple effect on buttons
document.querySelectorAll(".btn.ripple").forEach(button => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple-effect");
    this.appendChild(circle);

    const rect = this.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  if (toggle && icon) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      icon.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    });
  }
});
// === Starfield Background Animation ===
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let stars = [];
const numStars = 150;

function initStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.5 + 0.1,
      alpha: Math.random() * 0.5 + 0.5
    });
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.x -= star.speed;
    if (star.x < 0) star.x = canvas.width;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 255, 255, ${star.alpha})`; // Neon blue stars
    ctx.shadowColor = 'cyan';
    ctx.shadowBlur = 6;
    ctx.fill();
  });
}

function animate() {
  drawStars();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  initStars();
});

resizeCanvas();
initStars();
animate();
ctx.fillStyle = document.body.classList.contains('light-mode') ? 
  `rgba(50, 50, 50, ${star.alpha})` : // subtle grey in light mode
  `rgba(0, 255, 255, ${star.alpha})`;  // neon blue in dark mode
ctx.shadowColor = document.body.classList.contains('light-mode') ? 
  'rgba(50, 50, 50, 0.5)' : 
  'cyan';
// Sound effect objects
const clickSound = new Audio('assets/click.wav');

// Play click sound on all clickable buttons/links
document.querySelectorAll('button, a').forEach(elem => {
  elem.addEventListener('click', (e) => {
  clickSound.currentTime = 0;
  clickSound.play().catch(error => {
    console.error("Playback error:", error);
  });
});
});
