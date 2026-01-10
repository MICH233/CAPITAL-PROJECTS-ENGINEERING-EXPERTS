const btn = document.getElementById("hamburguesa");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("activo");
});
