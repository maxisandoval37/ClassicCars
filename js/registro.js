$(document).ready(function(){  
    $("#medioPago").change(function(){
        if($("#medioPago option:selected").val() === "Cuenta bancaria"){
            $(".cBancaria").show();
            $(".mPago").hide();
            $(".tCredito").hide();
            $("#email").val('');
            $("#vencimiento").val(null);
            $("#codigoSeg").val(null);
            $("#numero").val(null);
            $(".spanEmail").hide();
            $(".spanNumero").hide();
            $(".spanSeguridad").hide();
            $(".spanVencimiento").hide();
            $(".spanCBU").show();
            $(".spanCVU").show();
            $(".spanCuit").show();

        }else if($("#medioPago option:selected").val() === "Mercado pago"){
            $(".cBancaria").hide();
            $(".mPago").show();
            $(".tCredito").hide();
            $("#cuit").val('');
            $("#vencimiento").val(null);
            $("#codigoSeg").val(null);
            $("#CBU").val(null);
            $("#CVU").val(null);
            $("#numero").val(null);
            $(".spanEmail").show();
            $(".spanCBU").hide();
            $(".spanCVU").hide();
            $(".spanCuit").hide();
            $(".spanNumero").hide();
            $(".spanSeguridad").hide();
            $(".spanVencimiento").hide();
        }else if($("#medioPago option:selected").val() === "Tarjeta de credito"){
            $(".cBancaria").hide();
            $(".mPago").hide();
            $(".tCredito").show();
            $("#email").val('');
            $("#CBU").val(null);
            $("#CVU").val(null);
            $("#cuit").val('');
            $(".spanEmail").hide();
            $(".spanCBU").hide();
            $(".spanCVU").hide();
            $(".spanCuit").hide();
            $(".spanNumero").show();
            $(".spanSeguridad").show();
            $(".spanVencimiento").show();
        }else{
            $(".cBancaria").hide();
            $(".mPago").hide();
            $(".tCredito").hide();
            $("#email").val('');
            $("#CBU").val(null);
            $("#CVU").val(null);
            $("#cuit").val('');
            $("#vencimiento").val(null);
            $("#codigoSeg").val(null);
            $("#numero").val(null);
            $(".spanEmail").hide();
            $(".spanCBU").hide();
            $(".spanCVU").hide();
            $(".spanCuit").hide();
            $(".spanNumero").hide();
            $(".spanSeguridad").hide();
            $(".spanVencimiento").hide();
        }
    });
    $("#nombre").change(function(){
        if($("#nombre").val() !== ''){
            $(".spanNombre").hide();
        }else{
            $(".spanNombre").show();
        }
    });
    $("#apellido").change(function(){
        if($("#apellido").val() !== ''){
            $(".spanApellido").hide();
        }else{
            $(".spanApellido").show();
        }
    });
    $("#domicilio").change(function(){
        if($("#domicilio").val() !== ''){
            $(".spanDomicilio").hide();
        }else{
            $(".spanDomicilio").show();
        }
    });
    $("#dni").change(function(){
        if($("#dni").val() !== null && ($("#dni").val() >= 1000000 && $("#dni").val() <= 99999999)){
            $(".spanDNI").hide();
        }else{
            $(".spanDNI").show();
        }
    });
    $("#fechaNacimiento").change(function(){
        if($("#fechaNacimiento").val() !== null){
            $(".spanNacimiento").hide();
        }else{
            $(".spanNacimiento").show();
        }
    });
    $("#marca").change(function(){
        if($("#marca").val() !== ''){
            $(".spanMarca").hide();
        }else{
            $(".spanMarca").show();
        }
    });
    $("#modelo").change(function(){
        if($("#modelo").val() !== ''){
            $(".spanModelo").hide();
        }else{
            $(".spanModelo").show();
        }
    });
    $("#año").change(function(){
        if($("#año").val() !== ''){
            if($("#año").val() >= 1950 && $("#año").val() <=2021){
                $(".spanAño").hide();
            }else{
                $(".spanAño").show();
            }
        }else{
            $(".spanAño").show();
        }
    });
    $("#color").change(function(){
        if($("#color").val() !== ''){
            $(".spanColor").hide();
        }else{
            $(".spanColor").show();
        }
    });
    $("#patente").change(function(){
        if($("#patente").val() !== ''){
            $(".spanPatente").hide();
        }else{
            $(".spanPatente").show();
        }
    });
    $("#medioPago").change(function(){
        if($("#medioPago option:selected").val() !== "Seleccione un medio de pago"){
            $(".spanPago").hide();
        }else{
            $(".spanPago").show();
        }
    });
    $("#email").change(function(){
        if($("#email").val() !== '' && emailValidator($("#email").val())){
            $(".spanEmail").hide();
        }else{
            $(".spanEmail").show();
        }
    });
    $("#emailRegistro").change(function(){
        if($("#emailRegistro").val() !== '' && emailValidator($("#emailRegistro").val())){
            $(".spanEmailRegistro").hide();
        }else{
            $(".spanEmailRegistro").show();
        }
    });
    $("#CBU").change(function(){
        if($("#CBU").val() !== null && $("#CBU").val() !== '' ){
            if($("#CBU").val() >= 0000000000000000000000 && $("#CBU").val() <= 9999999999999999999999){
                $(".spanCBU").hide();
                $(".spanCVU").hide();
                $(".spanCuit").hide();
            }else{
                $(".spanCBU").show();
                $(".spanCVU").show();
                $(".spanCuit").show();
            }
        }else{
            $(".spanCBU").show();
            $(".spanCVU").show();
            $(".spanCuit").show();
        }
    });
    $("#CVU").change(function(){
        if($("#CVU").val() !== null && $("#CVU").val() !== '' ){
            if($("#CVU").val() >= 0000000000000000000000 && $("#CVU").val() <= 9999999999999999999999){
                $(".spanCBU").hide();
                $(".spanCVU").hide();
                $(".spanCuit").hide();
            }else{
                $(".spanCBU").show();
                $(".spanCVU").show();
                $(".spanCuit").show();
            }
        }else{
            $(".spanCBU").show();
            $(".spanCVU").show();
            $(".spanCuit").show();
        }
    });
    $("#cuit").change(function(){
        if($("#cuit").val() !== '' ){
            if($("#cuit").val() >= 0000000000 && $("#cuit").val() <= 99999999999){
                $(".spanCBU").hide();
                $(".spanCVU").hide();
                $(".spanCuit").hide();
            }else{
                $(".spanCBU").show();
                $(".spanCVU").show();
                $(".spanCuit").show();
            }
        }else{
            $(".spanCBU").show();
            $(".spanCVU").show();
            $(".spanCuit").show();
        }
    });
    $("#numero").change(function(){
        if($("#numero").val() !== null && $("#numero").val() !== '' ){
            if($("#numero").val() >= 0000000000000000 && $("#numero").val() <= 9999999999999999){
                $(".spanNumero").hide();
            }else{
                $(".spanNumero").show();
            }
        }else{
            $(".spanNumero").show();
        }
    });
    $("#codigoSeg").change(function(){
        if($("#codigoSeg").val() !== null && $("#codigoSeg").val() !== '' ){
            if($("#codigoSeg").val() >= 000 && $("#codigoSeg").val() <= 9999){
                $(".spanSeguridad").hide();
            }else{
                $(".spanSeguridad").show();
            }
        }else{
            $(".spanSeguridad").show();
        }
    });
    $("#vencimiento").change(function(){
        let vencimientoAux = vencimiento($("#vencimiento").val());
        $("#vencimiento").val(vencimientoAux);
        if($("#vencimiento").val().length == 5){
            $(".spanVencimiento").hide();
        }else{
            $(".spanVencimiento").show();
        }
    });
    $("#passwordRegistro").change(function(){
        if($("#passwordRegistro").val() !== null && $("#passwordRegistro").val() !== undefined && $("#passwordRegistro").val() !== ''){
            if($("#passwordRegistro").val().length >= 8){
                $(".spanPassword").hide();
            }else{
                $(".spanPassword").show();
            }
        }else{
            $(".spanPassword").show();
        }
    });
    $("#registrarse").click(function(){
        let nombreValidado = $('.spanNombre').is(':hidden');
        let apellidoValidado = $('.spanApellido').is(':hidden');
        let domicilioValidado = $('.spanDomicilio').is(':hidden');
        let dniValidado = $('.spanDNI').is(':hidden');
        let fechaNacimientoValidado = $('.spanNacimiento').is(':hidden');
        let marcaValidado = $('.spanMarca').is(':hidden');
        let modeloValidado = $('.spanModelo').is(':hidden');
        let añoValidado = $('.spanAño').is(':hidden');
        let colorValidado = $('.spanColor').is(':hidden');
        let patenteValidado = $('.spanPatente').is(':hidden');
        let medioPagoValidado = $('.spanPago').is(':hidden');
        let passwordValidado = $('.spanPassword').is(':hidden');
        let emailRegistroValidado = $('.spanEmailRegistro').is(':hidden');
        let emailValidado;
        let CBUValidado;
        let CVUValidado;
        let cuitValidado;
        let numeroValidado;
        let codigoSeguridadValidado;
        let vencimientoValidado;

        if($("#medioPago option:selected").val() === "Mercado pago"){
            if($('.spanEmail').is(':hidden')){
                emailValidado = true;
            }else{
                emailValidado = false;
            }
            CBUValidado = true;
            CVUValidado = true;
            cuitValidado = true;
            numeroValidado = true;
            codigoSeguridadValidado = true;
            vencimientoValidado = true;
        }else if($("#medioPago option:selected").val() === "Cuenta bancaria"){
            if($('.spanCBU').is(':hidden') || $('.spanCVU').is(':hidden') || $('.spanCuit').is(':hidden')){
                CBUValidado = true;
                CVUValidado = true;
                cuitValidado = true;
            }else{
                CBUValidado = false;
                CVUValidado = false;
                cuitValidado = false;
            }
            emailValidado = true;
            numeroValidado = true;
            codigoSeguridadValidado = true;
            vencimientoValidado = true;
        }else if($("#medioPago option:selected").val() === "Tarjeta de credito"){
            if($('.spanNumero').is(':hidden') && $('.spanSeguridad').is(':hidden') && $('.spanVencimiento').is(':hidden')){
                numeroValidado = true;
                codigoSeguridadValidado = true;
                vencimientoValidado = true;
            }else{
                numeroValidado = false;
                codigoSeguridadValidado = false;
                vencimientoValidado = false;
            }
            CBUValidado = true;
            CVUValidado = true;
            cuitValidado = true;
            emailValidado = true;
        }else{
            emailValidado = true;
            CBUValidado = true;
            CVUValidado = true;
            cuitValidado = true;
            numeroValidado = true;
            codigoSeguridadValidado = true;
            vencimientoValidado = true;
        }
        
        if(nombreValidado && apellidoValidado && domicilioValidado && dniValidado && fechaNacimientoValidado && marcaValidado && modeloValidado && añoValidado && colorValidado && emailRegistroValidado &&
           patenteValidado && medioPagoValidado && emailValidado && CBUValidado && CVUValidado && cuitValidado && numeroValidado && codigoSeguridadValidado && vencimientoValidado && passwordValidado){
            confirmarRegistro();
        }
    });
});

function emailValidator(value){
    var re = /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/;
    return re.test(String(value));
};

function vencimiento(fecha) {
    if(fecha !== '' && fecha != null){
        if(fecha.length === 4){
            return fecha.substring(0, 2) + "/" + fecha.substring(2, 4);
        }else{
            return fecha;
        }
    }else{
        return fecha;
    }
}

function confirmarRegistro() {
    $("#registroConfirmacion").modal();
    
    $(".btn-primary").click(function(){
        window.location.href = "login.html";
    });
   
}