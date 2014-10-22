/* jshint -W117, -W098 */
//desactivo correcciones de  globales, y las declaraciones no usadas
window.maquina = window.maquina || {}; //Si no existe, creo el objeto global de la escena. 

//document.addEventListener("readySetup",  maquina.start, false); //cuando la aplicacion está lista

maquina.setup=function(){
    //TODO:
    //Es lo primero que se ejecuta, aqui se pueden instanciar objetos, setear propiedades iniciales, etc.
    //se ejecuta solo una vez antes de iniciar la aplicación
    //no retorna
     TODO("setup en main.js");

};

maquina.start=function(){
    $("#superWrapper").css("opacity",1); //muestra
    //TODO:
    //comienzo de un nuevo intento, aqui se pueden generar los valores iniciales, definir las opciones, las respuestas correctas, los distractores.
    //se llama cada vez que se inicia una partida
    //no retorna
  
     TODO("start en main.js");
};

maquina.isReady=function(){
    //TO-DO
    //si la maquina está lista para ser revisada (si están todos los campos completados)
    //retorna true si está listo, o false si no lo está
    
     TODO("isReady en main.js");
    
};

maquina.isValid=function(){
    //TO-DO
    //si la maquina se resolvió correctamente
    //retorna true si el resultado ingresado es válido, o false si no lo es.
     TODO("isValid en main.js");
};



maquina.onTryAgain=function(){
    //TODO:
    //Se llama cuando se tiene un nuevo intento luego de fallar, aqui se debe restablecer todas las respuestas erradas .
    //no retorna
   
    TODO("onUsrSuccess en main.js");
};  

maquina.showAnswer=function(){
    //TODO:
    //Se llama cuando no quedan intentos y el usuario falla, se debe desplegar la respuesta correcta
    //no retorna
    
    TODO("onUsrSuccess en main.js");

};

maquina.reset=function(){
    //TODO:
    //restablecer todo.
    //se llama despues de finalizar la jugada.
    //despues de esta funcion se llama automaticamente a .start()
};

















//A partir de aqui el codigo está embrujado.

/********************************************/
/********************************************/
/********************************************/
/********************************************/
/********************************************/
/********************************************/
/********************************************/
/********************************************/
/********************************************/
/********************************************/



maquina.onUsrFail=function(){
    //se llama cuando el usuario erró en alguna(s) de sus respuestas
    //normalmente puede dejarse vacía (opcional)
    //TODO:
    
    TODO("onUsrFail en main.js"); //borrame cuando completes esta funcion
};

maquina.onUsrSuccess=function(){
    //TODO:
    //se llama cuando el usuario acertó a las preguntas
    //normalmente puede dejarse vacía (opcional)
    TODO("onUsrSuccess en main.js");
};

maquina.block=function(bloquear){
    
    bloquear = bloquear || true;
    //parametro bloquear booleano, si es true bloquea, de lo contrario desbloquea
    if(bloquear){
        //bloquear todo 
    }else{
        //permitir interaccion de todo
    }
    
};


$(function(){
    maquina.setup();
}); 

console.log("end main.js");
//