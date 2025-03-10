document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu-enlaces2");
    const botonMenu = document.getElementById("boton-menu");
    const botonesApuestas = document.getElementById("botones-apuestas");
    const finalPagina = document.getElementById("final-pagina");
    const botonFuturista = document.getElementById("boton-futurista");
    const ventanaSoporte = document.getElementById("ventana-ia");
    const botonesUnirse = document.querySelectorAll('.boton-unirse');

    botonesUnirse.forEach(boton => {
        boton.addEventListener('click', function (event) {
            console.log("click");
            event.preventDefault();
            const card = this.closest('.card-apuesta');
            card.classList.toggle('unido');
        });
    });


    if (botonFuturista && ventanaSoporte) {
        botonFuturista.addEventListener("click", function (event) {
            event.preventDefault();
            if (ventanaSoporte.style.visibility === 'hidden' || ventanaSoporte.style.visibility === '') {
                ventanaSoporte.style.visibility = 'visible';
                ventanaSoporte.style.opacity = '1';
                ventanaSoporte.style.transform = 'translateY(0)';
                setTimeout(() => {
                    ventanaSoporte.classList.add('visible');
                }, 10);
            } else {
                ventanaSoporte.classList.remove('visible');
                ventanaSoporte.style.opacity = '0';
                ventanaSoporte.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    ventanaSoporte.style.visibility = 'hidden';
                }, 500);
            }
        });
    }
    

    if (menu && botonMenu) {
        botonMenu.addEventListener("click", function () {
            menu.classList.toggle("mostrar");
        });

        document.addEventListener("click", function (event) {
            if (!menu.contains(event.target) && event.target !== botonMenu) {
                menu.classList.remove("mostrar");
            }
        });
    }

    if (botonesApuestas && finalPagina) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                botonesApuestas.style.position = 'absolute';
                botonesApuestas.style.right = '2%';
                botonesApuestas.style.bottom = '30px';
            } else {
                botonesApuestas.style.position = 'fixed';
                botonesApuestas.style.right = '3%';
            }
        });

        observer.observe(finalPagina);
    }
});

window.onload = function () {
    const loader = document.getElementById('loader');
    const content = document.getElementById('contenedor');
    setTimeout(function () {
        loader.classList.add('hidden');
        setTimeout(function () {
            loader.style.display = 'none';
            content.style.display = 'block';
        }, 500);
    }, 1000);
};
