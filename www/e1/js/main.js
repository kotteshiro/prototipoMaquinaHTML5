/* jshint -W117, -W098 */ //desactivo correcciones de  globales, y las declaraciones no usadas
window.maquina = window.maquina || {}; //Si no existe, creo el objeto global de la escena. 

//document.addEventListener("readySetup",  maquina.start, false); //cuando la aplicacion está lista

maquina.setup=function(){
    //Es lo primero que se ejecuta, aqui se pueden instanciar objetos, setear propiedades iniciales, etc.
    //se ejecuta solo una vez antes de iniciar la aplicación
    //no retorna
    //TO-DO
    
    
    $("#superWrapper").css("opacity",1); //tmp
    
    $(".boton").click(function(am){ //se selecciona una opcion a la vez
        $(".boton").removeClass("btnSelected"); //quitamos la clase de seleccion(btnSelected) (deseleccionamos todo)
        $(am.currentTarget).addClass("btnSelected"); // aplicamos la clase de seleccion al elemento actual
    });
    maquina.start();
    //alert("setup");
};

maquina.start=function(){
    $("#superWrapper").css("opacity",1); //muestra
    //comienzo de un nuevo intento, aqui se pueden generar los valores iniciales, definir las opciones, las respuestas correctas, los distractores.
    //se llama cada vez que se inicia una partida
    //no retorna
    //TO-DO
    TODO("start en main.js"); //borrame cuando completes esta funcion
};

maquina.isReady=function(){
    //si la maquina está lista para ser revisada (si están todos los campos completados)
    //retorna true si está listo, o false si no lo está
    //TO-DO
    TODO("isReady en main.js"); //borrame cuando completes esta funcion
    return false;
};

maquina.isValid=function(){
    //si la maquina se resolvió correctamente
    //retorna true si el resultado ingresado es válido, o false si no lo es.
    //TO-DO
     TODO("isValid en main.js"); //borrame cuando completes esta funcion
    return false;
};

maquina.onUsrFail=function(){
    //se llama cuando el usuario erró en alguna(s) de sus respuestas
    //normalmente puede dejarse vacía (opcional)
    //TO-DO
    
    TODO("onUsrFail en main.js"); //borrame cuando completes esta funcion
};

maquina.onUsrSuccess=function(){
    //se llama cuando el usuario acertó a las preguntas
    //normalmente puede dejarse vacía (opcional)
    //TO-DO
    TODO("onUsrSuccess en main.js");
};

maquina.onTryAgain=function(){
    //Se llama cuando se tiene un nuevo intento luego de fallar, aqui se debe restablecer todas las respuestas erradas .
    //no retorna
    //TO-DO
     TODO("onTryAgain en main.js");
};

maquina.showAnswer=function(){
    //Se llama cuando no quedan intentos y el usuario falla, se debe desplegar la respuesta correcta
    //no retorna
    //TO-DO
    TODO("showAnswer en main.js");
};

maquina.block=function(bloquear){
    bloquear = bloquear || true;
    //parametro bloquear booleano, si es true bloquea, de lo contrario desbloquea
    //TO-DO
    if(bloquear){
        //bloquear todo 
    }else{
        //permitir interaccion de todo
    }
    TODO("block en main.js");
};

maquina.reset=function(){
    //restablecer todo.
    //se llama despues de finalizar la jugada.
    //despues de esta funcion se llama a .start()
    //TO-DO
    TODO("reset en main.js");
};

$(function(){
    maquina.setup();
});

console.log("end main.js");