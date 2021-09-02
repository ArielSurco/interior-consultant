const hamburguer = document.querySelector(".nav .hamburguer");
const navLinks = document.querySelector(".nav .nav-links");
const body = document.querySelector("body");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("transform");
    navLinks.classList.toggle("open");
    body.classList.toggle("hamburguer-open");
})

const positionFooter = () => {
    const footer = document.querySelector(".footer");
    footer.style.position = (body.offsetHeight < innerHeight) ? "initial" : "relative";
}

window.addEventListener("load", positionFooter);
