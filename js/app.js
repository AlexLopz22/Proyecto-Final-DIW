document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu-enlaces2");
    const botonMenu = document.getElementById("boton-menu"); 
    const sidebar = document.getElementById("sidebar-social");
    const botonSidebar = document.getElementById("boton-sidebar");

    botonSidebar.addEventListener("click", function(){
        if(sidebar.classList.contains("sidebar-activa")){
            sidebar.classList.remove("sidebar-activa");
        } else{
            sidebar.classList.add("sidebar-activa");
        }
    })

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
