const btn = document.getElementById("hamburguesa");
const nav = document.getElementById("nav");
const submenuToggle = document.querySelector(".submenu-toggle");
const submenu = document.querySelector(".submenu");

/* Abrir / cerrar menú principal */
btn.addEventListener("click", () => {
    nav.classList.toggle("activo");
});

/* Submenú por CLICK (tablet y móvil) */
submenuToggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 1024) {
        e.preventDefault();
        submenu.classList.toggle("activo");
    }
});
