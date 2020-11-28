$(document).ready(function(){  
    bienvenida();
    $(".buttonComprar").click(function(){
        var usuario = localStorage.getItem('nombreUsuario');

        if(usuario !== '' && usuario !== null && usuario !== undefined){
            confirmarCompra()
        }else{
            window.location.href = "login.html";
        }
    });

    $(".cerrarSesion").click( function() {
        localStorage.removeItem('nombreUsuario');
        localStorage.clear();
        location.reload();
    });
});

function confirmarCompra() {
    $("#compraConfirmacion").modal();
    
    $(".btn-primary").click(function(){
        location.reload();
    });
   
}

function bienvenida(){
    var usuario = localStorage.getItem('nombreUsuario');

    if(usuario != null){
        $(".loginButtons").hide();
        $(".logoutButtons").show();
        $(".saludo").append("<a style='color: white'><span class='logoutButtons'>Bienvenido " + usuario + "</span></a>");
    }
}
