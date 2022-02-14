$(document).ready(function() {
    let nombreCompleto = $("#NombreCompleto").val()
    let RUT = $("#RUT").val()
    let Alias = $("#Alias").val()
    let Email = $("#Email").val()

    $("#NombreCompleto").focus()
    if(nombreCompleto == ""){
        $("#respuestaNombreCompleto").html(" Por favor ingrese su nombre")
    }
    if(Alias == ""){
        $("#respuestaAlias").html(" Por favor ingrese alias superior a 5 caracteres")
    }
    if(RUT == ""){
        $("#respuestaRUT").html(" Por favor ingrese RUT válido")
    }
    if(Email == ""){
        $("#respuestaEmail").html(" Por favor ingrese correo válido")
    }

    cargarListaRegiones()
})
//Función para que usuario ingrese nombre completo con solo letras
$("#NombreCompleto").keyup(function(){

    let nombreCompleto = $("#NombreCompleto").val()
    nombreCambiado = nombreCompleto.replace(/[^abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZáéíóúÁÉÍÓÚ ]/g,"")
    $("#NombreCompleto").val(nombreCambiado)
    if(nombreCompleto == ""){
        $("#respuestaNombreCompleto").html(" Por favor ingrese su nombre")
    }else{
        $("#respuestaNombreCompleto").html("")
    }
})
//
//Función que valida Alias superior a 5 caracteres
$("#Alias").keyup(function(){

    let Alias = $("#Alias").val()

    if(Alias.length < 6){
        $("#respuestaAlias").html(" Por favor ingrese alias superior a 5 caracteres")
    }else{
        $("#respuestaAlias").html("")
    }
})
//
//Función que anula caracteres o letras que no corresponden al correcto ingreso del RUT,
//además agrega los . y el - del RUT.
//Por último valida si RUT chileno es válido
$('#RUT').keyup(function(){
    let RUTIngresado = ""
    let RUTCambiado = ""
    RUTIngresado = $('#RUT').val()
    if(RUTIngresado.length > 7){
        RUTCambiado = RUTIngresado.replace(/[^k1234567890]/g,"")
    }else{
        RUTCambiado = RUTIngresado.replace(/[^1234567890]/g,"")
    }
    if(RUTCambiado.length == 1){
        RUTCambiado = "-" + RUTCambiado
    }else if(RUTCambiado.length == 2){
        RUTCambiado = RUTCambiado.substring(0,1) + ("-") + RUTCambiado.substring(1,2)
    }else if(RUTCambiado.length == 3){
        RUTCambiado = RUTCambiado.substring(0,2) + ("-") + RUTCambiado.substring(2,3)
        $('#RUT').val(RUTCambiado)
    }else if(RUTCambiado.length == 4){
        RUTCambiado = RUTCambiado.substring(0,3) + ("-") + RUTCambiado.substring(3,4)
        $('#RUT').val(RUTCambiado)
    }else if(RUTCambiado.length == 5){
        RUTCambiado = RUTCambiado.substring(0,1) +  "." + RUTCambiado.substring(1,4) + ("-") + RUTCambiado.substring(4,5)
        $('#RUT').val(RUTCambiado)
    }else if(RUTCambiado.length == 6){
        RUTCambiado = RUTCambiado.substring(0,2) +  "." + RUTCambiado.substring(2,5) + ("-") + RUTCambiado.substring(5,6)
        $('#RUT').val(RUTCambiado)
    }else if(RUTCambiado.length == 7){
        RUTCambiado = RUTCambiado.substring(0,3) +  "." + RUTCambiado.substring(3,6) + ("-") + RUTCambiado.substring(6,7)
        $('#RUT').val(RUTCambiado)
    }else if(RUTCambiado.length == 8){
        RUTCambiado = RUTCambiado.substring(0,1) +  "." + RUTCambiado.substring(1,4) +  "." + RUTCambiado.substring(4,7) + ("-") + RUTCambiado.substring(7,8)
        $('#RUT').val(RUTCambiado)
    }else if(RUTCambiado.length == 9){
        RUTCambiado = RUTCambiado.substring(0,2) +  "." + RUTCambiado.substring(2,5) +  "." + RUTCambiado.substring(5,8) + ("-") + RUTCambiado.substring(8,9)
        $('#RUT').val(RUTCambiado)
    }
    $('#RUT').val(RUTCambiado)
})
var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut : function (rutCompleto) {
        rutCompleto = rutCompleto.replace(/[.]/g,"")
        rutCompleto = rutCompleto.replace("‐","-");
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
            return false;
        var tmp   = rutCompleto.split('-');
        var digv  = tmp[1]; 
        var rut   = tmp[0];
        if ( digv == 'K' ) digv = 'k' ;
    
        return (Fn.dv(rut) == digv );
    },
    dv : function(T){
        var M=0,S=1;
        for(;T;T=Math.floor(T/10))
        S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
    }
}
$("#RUT").keyup(function(){
    if (Fn.validaRut( $("#RUT").val() )){
        $("#respuestaRUT").html(" El rut ingresado es válido");
    } else {
        $("#respuestaRUT").html(" Por favor ingrese RUT válido");
    }
});
//
//Función que admite solo los caracteres válidos para correo
$("#Email").keyup(function(){
    let correoIngresado = ""
    let correoCambiado = ""
    correoIngresado = $("#Email").val()
    correoCambiado = correoIngresado.replace(/[^1234567890abcdefghijklmnopqrstuvwxyz.@]/g,"")
    let contadorArroa = 0
    let contadorPuntos = 0
    let caracter = ""
    let posicionArroa = 0
    let posicionPunto = 0
    let correo1Parte1 = ""
    let correo1Parte2 = ""
    let correo2Parte1 = ""
    let correo2Parte2 = ""
    for(let i=0;correoCambiado.length > i;i++){
        caracter = correoCambiado.charAt(i)
        if(caracter == "@"){
            contadorArroa++
            posicionArroa = correoCambiado.indexOf("@")
            correo1Parte1 = correoCambiado.substring(0,posicionArroa + 1)
            correo1Parte2 = correoCambiado.substring(posicionArroa + 1,correoCambiado.length)
        }
        if(contadorArroa > 1){
            correo1Parte2 = correo1Parte2.replace(/[@]/,"")
            correoCambiado = correo1Parte1 + correo1Parte2
        }  
    }
    for(let i=0;correo1Parte2.length > i;i++){
        caracter = correo1Parte2.charAt(i)
        if(caracter == "."){
            contadorPuntos++
            posicionPunto = correo1Parte2.indexOf(".")
            correo2Parte1 = correo1Parte2.substring(0,posicionPunto + 1)
            correo2Parte2 = correo1Parte2.substring(posicionPunto + 1,correo1Parte2.length)
        }
        if(contadorPuntos > 1){
            correo2Parte2 = correo2Parte2.replace(/[.]/,"")
            correoCambiado = correo1Parte1 + correo2Parte1 + correo2Parte2
        }  
    }

    $("#Email").val(correoCambiado)
    
    
    /*

    if(contadorArroa == 1){
        $("#respuestaEmail").html(" El correo ingresado es válido");
    }else{
        $("#respuestaEmail").html(" El correo ingresado es válido");
    }
    */
})
//
//Función para cargar regiones
function cargarListaRegiones(){
    const action = "listarRegiones";
    let data = "";

    $.ajax({
        url  :"php/ajaxData.php",
        type : "Post",
        async: true,
        data :{
            action:action
        },
        beforeSend:function(){

        },
        success:function(response){
            if(response == "notData"){
                data = "No hay datos para mostrar.";
            }else{
                data = JSON.parse(response);
            }
            $("#Region").html(data);
        },
        error: function(error){

        }
    });
}
//
//Función para cargar comunas dependiendo de la Región
$("#Region").change(function(){
    let regionSeleccionada = $(this).children(":selected").val()

    const action = "listarComunas";
    const idRegion = regionSeleccionada
    let data = "";
    $("#Comuna").removeAttr("disabled")

    $.ajax({
        url  :"php/ajaxData.php",
        type : "Post",
        async: true,
        data :{
            action:action,
            idRegion:idRegion
        },
        beforeSend:function(){

        },
        success:function(response){
            if(response == "notData"){
                data = "No hay datos para mostrar.";
            }else{
                data = JSON.parse(response);
            }
            $("#Comuna").html(data);
        },
        error: function(error){

        }
    });

})
//

