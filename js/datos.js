var cajaChequeo=null;
 
function elementoSeleccionado(caja){
 
    console.log(caja.id)
    // caja.style.color="black"
    cajaChequeo=caja.id
 
    
}
function eevaluaPatron(){
 
   // console.log("cajaChequeo "+cajaChequeo)
    if(cajaChequeo=="cId"){
        var patron =/^[0-9]+$/;
        var resultado =patron.test(cId.value);
        console.log("Resltado Chequeo:"+resultado )
        if(!resultado){
            document.getElementById("cId").style.color="red"
            document.getElementById("cId").focus()
        }  else{document.getElementById("cId").style.color="black"} 
        
 
    }
    if(cajaChequeo=="cCantidad"){
        var patron =/[+-]?([0-9]*[.])?[0-9]+/;
        var resultado =patron.test(cCantidad.value);
        console.log("Resltado Chequeo:"+resultado )
        if(!resultado){
            document.getElementById("cCantidad").style.color="red"
            document.getElementById("cCantidad").focus()
        }  else{document.getElementById("cCantidad").style.color="black"} 
        
    }
    if(cajaChequeo=="cDescripcion"){
        var patron =/(?=^.{1,150}$)[a-zA-Z0-9áéíóú]+/;
        var resultado =patron.test(cDescripcion.value);
        console.log("Resltado Chequeo:"+resultado )
        if(!resultado){
            document.getElementById("cDescripcion").style.color="red"
            document.getElementById("cDescripcion").focus()
        }  else{document.getElementById("cDescripcion").style.color="black"} 
        
    }
    if(cajaChequeo=="cTipo"){
        var patron = /^Temperatura$|^Luminosidad$|^Caudal$|^Viento$|^Contaminacion$|^Polucion$/;
        var resultado =patron.test(cTipo.value);
        console.log("Resltado Chequeo:"+resultado )
        if(!resultado){
            document.getElementById("cTipo").style.color="red"
            document.getElementById("cTipo").focus()
        }  else{document.getElementById("cTipo").style.color="black"} 
        
    }
    if(cajaChequeo=="cLatitud"){
        var patron =/^-?[0-9]\d*(\.\d+)?$/;
        var resultado =patron.test(cLatitud.value);
        console.log("Resltado Chequeo:"+resultado )
        if(!resultado){
            document.getElementById("cLatitud").style.color="red"
            document.getElementById("cLatitud").focus()
        }  else{document.getElementById("cLatitud").style.color="black"} 
        
    }
    if(cajaChequeo=="cLongitud"){
        var patron =/^-?[0-9]\d*(\.\d+)?$/;
        var resultado =patron.test(cLongitud.value);
        console.log("Resltado Chequeo:"+resultado )
        if(!resultado){
            document.getElementById("cLongitud").style.color="red"
            document.getElementById("cLongitud").focus()
        }  else{document.getElementById("cLongitud").style.color="black"} 
        
    }
    if(cajaChequeo=="cFecahac"){
        /* Tiene que comenzar por - */
        var patron =/^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/;
        
        var resultado =patron.test(cFecahac.value);
        console.log("Resltado Chequeo:"+resultado )
        if(!resultado){
           document.getElementById("cFecahac").style.color="red"
           document.getElementById("cFecahac").focus()
        }  else{document.getElementById("cFecahac").style.color="black"} 
        
        
        }
        
        if(cajaChequeo=="cHora"){
        /* Tiene que comenzar por - */
        var patron =/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        
        var resultado =patron.test(cHora.value);
        console.log("Resltado Chequeo:"+resultado )
        if(!resultado){
           document.getElementById("cHora").style.color="red"
           document.getElementById("cHora").focus()
        }  else{document.getElementById("cHora").style.color="black"} 
        
        
        }

}
let  cajas =document.querySelectorAll("form input");
/*
for (i=0; i<cajas.length;i++){
 
    cajas[i].addEventListener('focus',elementoSeleccionado,false);
}*/
 
 
cajas.forEach(caja => {
    caja.addEventListener('keydown', () => {        
        elementoSeleccionado(caja)
    } );
  });
  cajas.forEach(caja => {
    caja.addEventListener('keyup', () => {
        
        eevaluaPatron(caja)
    } );
  });