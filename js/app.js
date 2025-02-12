document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu-enlaces2");
    const botonMenu = document.getElementById("boton-menu"); 

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
