document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu-enlaces2");
    const botonMenu = document.getElementById("boton-menu");
    const botonesApuestas = document.getElementById("botones-apuestas");
    const finalPagina = document.getElementById("final-pagina");

    // Observar si el final de la página es visible
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            botonesApuestas.style.position = 'absolute';
            botonesApuestas.style.right = '10px';
        } else {
            botonesApuestas.style.position = 'fixed';
            botonesApuestas.style.right = '40px';
        }
    });

    observer.observe(finalPagina);

    botonMenu.addEventListener("click", function() {
        if (menu.classList.contains("mostrar")) {
            menu.classList.remove("mostrar");
        } else {
            menu.classList.add("mostrar");
        }
    });

    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && event.target !== botonMenu) {
            menu.classList.remove("mostrar");
        }
    });
});
