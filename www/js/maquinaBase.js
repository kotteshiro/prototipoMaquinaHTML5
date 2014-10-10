/* jshint -W117, -W098 */ //desactivo correcciones de  globales, y las declaraciones no usadas

window.maquina = window.maquina || {}; //Si no existe, creo el objeto global de la escena. 

maquina.mostrarBtnListo=function(){
    //To-Do
};


maquina.check=function(){
    if(maquina.isReady()){ //si la maquina está lista para ser revisada.
        maquina.btnListo.show();
    }else{
        maquina.btnListo.hide();
    }
};

maquina._onUsrSuccess = function(){
    maquina.splashGood();
};

maquina._onTryAgain = function(){
    maquina.splashTryAgain();
};

maquina._onUsrFail = function(){
    //para el uso en scorm
};
maquina._showAnswer=function(){
    maquina.splashSeeAnswer();
};

maquina.splashGood=function(){
    showAndHide("#good"); //declaracion en helper.js
};

maquina.splashTryAgain=function(){
    showAndHide("#tryagain"); //declaracion en helper.js
};

maquina.splashSeeAnswer=function(){    
    showAndHide("#seeanswer"); //declaracion en helper.js
};

maquina._block=function(vl){    
    if(vl===true){
        $("#blocklayer").css("display","block");
    }else{
        $("#blocklayer").css("display","none");
    }
};



//*****************

$(function(){
    maquina.intentosRestantes = maquina.intentosRestantes || _cfg.intentos || 3; //si existe se mantiene el valor, si no, se asigna el valor de la config, si no existe en la cofig se le asigna 3
    maquina.btnListo= new Botonui("ready");
    maquina.btnComenzar= new Botonui("restart");

    maquina.btnListo.hide(); //oculto boton listo
    maquina.btnComenzar.hide(); //oculto boton comenzar
   
    maquina.btnListo.btnclick=function(){ //cuando se hace click en boton listo
        console.log("click en boton listo");
       if(maquina.isValid()){ //si el resultado es valido
            maquina._onUsrSuccess();
            maquina.onUsrSuccess();
        }else{
            maquina._onUsrFail();
            maquina.onUsrFail();
            if(maquina.intentosRestantes<=1){ //si no quedan intentos
                maquina.intentosRestantes = _cfg.intentos || 3;
                
                maquina.block(true);
                maquina._block(true);
                maquina.btnListo.hide();
                maquina._showAnswer();
                maquina.showAnswer();
                maquina.btnComenzar.show();
                
            }else{ //si quedan intentos
                maquina.intentosRestantes--;
                maquina._onTryAgain();
                maquina.onTryAgain();
                maquina.btnListo.hide();
            }
        }
    };
    
    maquina.btnComenzar.btnclick=function(){
        maquina.block(false);
        maquina._block(false);
        maquina.btnComenzar.hide();
        maquina.reset();
        maquina.start();
    };
    
    $("#ready").click(maquina.btnListo.btnclick);
    $("#restart").click(maquina.btnComenzar.btnclick);
    //maquina.btnListo._dom.addEventListener("click",maquina.btnclick); //seteo el evento click
    
    
    $(".boton").click(function(am){
        seleccionado=am.currentTarget;
        maquina.check(); //chequea
        maquina.btnListo.show();
    });
    
    document.title = _cfg.title;
    $("#titulo").text(_cfg.title);    
    /*botones*/
    
});

function Botonui(id){
    this._dom=document.getElementById(id);

    this.show=function(){
        this._dom.style.top="20px";
    };
    
    this.hide=function(){
        this._dom.style.top="75px";
    };
}

console.log("End maquinaBase.js");