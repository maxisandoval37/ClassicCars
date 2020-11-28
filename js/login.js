$(document).ready(function(){
    localStorage.setItem('intentosLogueo', 0);
    $("#login").click(function(){
        var usuario = $("#usuario").val();
        var password = $("#password").val();

        if( usuario === 'admin@email.com' && password === 'admin123'){
            let cantidadIntentos = localStorage.getItem('intentosLogueo');
            if(cantidadIntentos < 5){
                loguear();
                window.location.href = "encuesta.html";
            }else{
                $("#usuarioBloqueado").modal();
    
                $(".btn-primary").click(function(){
                    $("#usuarioBloqueado").modal('hide');
                });
            }
        }else{
            if( usuario === 'admin@email.com'){
                let cantidadIntentos = parseInt(localStorage.getItem('intentosLogueo'));
                localStorage.setItem('intentosLogueo', cantidadIntentos+1);
                let cantidadIntentosAux = parseInt(localStorage.getItem('intentosLogueo'));
                
                if(cantidadIntentosAux >= 5){
                    $("#usuarioBloqueado").modal();
        
                    $(".btn-primary").click(function(){
                        $("#usuarioBloqueado").modal('hide');
                    });
                }
                else{
                    $("#loginWarning").modal();
            
                    $(".btn-primary").click(function(){
                        $("#loginWarning").modal('hide');
                    });
                }
            }
            else{
                $("#loginWarning").modal();
        
                $(".btn-primary").click(function(){
                    $("#loginWarning").modal('hide');
                });
            }
        }
    });
});

function loguear() {
    var nombre = $("#usuario").val();
    localStorage.setItem('nombreUsuario', nombre);
    $("#usuario").val("");
    $("#password").val("");
}

