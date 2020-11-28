$(document).ready(function(){  
    bienvenida();

    $(".cerrarSesion").click( function() {
        localStorage.removeItem('nombreUsuario');
        localStorage.clear();
        location.reload();
    });

    $("#enviarEncuesta").click( function() {
        if($("#edadEncuesta").val() != '' && $("#edadEncuesta").val() != null && $("#edadEncuesta").val() != undefined && ($("#contactoEncuesta option:selected").val() != '' && $("#contactoEncuesta option:selected").val() != null )){
            window.location.href = "index.html";
        }
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
