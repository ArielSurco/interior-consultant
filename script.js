const hamburguer = document.querySelector(".nav .hamburguer");
const navLinks = document.querySelector(".nav .nav-links");
hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("transform");
    navLinks.classList.toggle("open");
})