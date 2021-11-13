

var bGrabar=document.getElementById("grabarRegistro");
bGrabar.addEventListener("click",grabar,false);
function grabar()
{
    grabarRegistro=true;
    nuevo=true;
    //'"' + "IdVecino" + '":' + '"' + IdVecino.value + '",'
    cfc= cFecahac.value.split("-");
    cFecahac.value=cfc[2]+"-"+cfc[1]+"-"+cfc[0]

    var datosElementoUrbano = '"' + "tipo" + '":' + '"' + cTipo.value + '",'
            + '"' + "cantidad" + '":' + '"' + cCantidad.value + '",'
            + '"' + "hora" + '":' + '"' + cHora.value + '",'
            + '"' + "fecha" + '":' + '"' + cFecahac.value + '",'
            + '"' + "latitud" + '":' + '"' + cLatitud.value + '",'        
            + '"' + "longitud" + '":' + '"' + cLongitud.value + '",'
            + '"' + "direccion" + '":' + '"' + cDireccion.value + '",' 
            + '"' + "descripcion" + '":' + '"' + cDescripcion.value + '"';
            
            
                 
            
            
            
alert(datosElementoUrbano)
    var ajaxrequest = new XMLHttpRequest();
            var jdatoselemento = "{" + datosElementoUrbano + "}";
            var envio = "Todo=" + jdatoselemento;

            ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/ManuelG/grabarElementoUrbano.php", true);

    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxrequest.onreadystatechange = function ()
    {
        alert(ajaxrequest.readyState + "--" + ajaxrequest.status);
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            var datosLeidos = ajaxrequest.responseText;
            console.log("Datos Recibidos  :" + datosLeidos);
        }
    };
   // ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //alert(envio)
    ajaxrequest.send(envio);
}