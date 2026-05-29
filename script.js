function toggleMenu() {
  document.getElementById("siteNav").classList.toggle("active");
}

document.querySelectorAll("#siteNav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("siteNav").classList.remove("active");
  });
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));

const topbar = document.querySelector(".topbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    topbar.style.boxShadow = "0 12px 40px rgba(0,0,0,.55)";
    topbar.style.background = "rgba(0,0,0,.96)";
  } else {
    topbar.style.boxShadow = "none";
    topbar.style.background = "rgba(0,0,0,.9)";
  }
});
