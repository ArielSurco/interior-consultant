const hamburguer = document.querySelector(".nav .hamburguer");
const navLinks = document.querySelector(".nav .nav-links");
const body = document.querySelector("body");
hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("transform");
    navLinks.classList.toggle("open");
    body.classList.toggle("hamburguer-open");
})