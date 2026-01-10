const elementos = document.querySelectorAll('.animar');

const mostrar = () => {
    elementos.forEach(el => {
        const posicion = el.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', mostrar);
mostrar();