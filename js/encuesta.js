$(document).ready(function(){  
    bienvenida();

    $(".cerrarSesion").click( function() {
        localStorage.removeItem('nombreUsuario');
        localStorage.clear();
        location.reload();
    });
});

function bienvenida(){
    var usuario = localStorage.getItem('nombreUsuario');

    if(usuario != null){
        $(".loginButtons").hide();
        $(".logoutButtons").show();
        $(".saludo").append("<a style='color: white'><span class='logoutButtons'>Bienvenido " + usuario + "</span></a>");
    }
}
