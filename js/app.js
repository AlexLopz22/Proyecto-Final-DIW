document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu-enlaces2");
    const botonMenu = document.getElementById("boton-menu");
    const botonesApuestas = document.getElementById("botones-apuestas");
    const finalPagina = document.getElementById("final-pagina");

    if (menu && botonMenu) {
        botonMenu.addEventListener("click", function() {
            menu.classList.toggle("mostrar");
        });

        document.addEventListener("click", function(event) {
            if (!menu.contains(event.target) && event.target !== botonMenu) {
                menu.classList.remove("mostrar");
            }
        });
    }

    if (botonesApuestas && finalPagina) {
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
    }
});
