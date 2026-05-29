function toggleMenu() {
  const nav = document.getElementById("mainNav");
  nav.classList.toggle("active");
}

document.querySelectorAll("#mainNav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mainNav").classList.remove("active");
  });
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));

const navBar = document.querySelector(".fight-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navBar.style.boxShadow = "0 12px 40px rgba(0,0,0,.55)";
    navBar.style.background = "rgba(0,0,0,.97)";
  } else {
    navBar.style.boxShadow = "none";
    navBar.style.background = "rgba(0,0,0,.92)";
  }
});
