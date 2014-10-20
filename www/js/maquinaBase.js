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

maquina._onReset = function(){
    maquina.intentosRestantes = _cfg.intentos || 3;
};

maquina._onUsrFail = function(){
    //para el uso en scorm
};

maquina._showAnswer=function(){
    sonido.play("SHOWANSW");
    maquina.splashSeeAnswer();
};

maquina.splashGood=function(){
    sonido.play("GOOD");
    showAndHide("#good"); //declaracion en helper.js
};

maquina.splashTryAgain=function(){
    sonido.play("TRYAGAIN");
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
    maquina.btnListo = new Botonui("ready");
    maquina.btnComenzar = new Botonui("restart",{left:"75px"},{left:"0px"});
    maquina.btnInfo = new Botonui("btnInfo",{left:"75px"},{left:"0px"});
    maquina.btnSonido = new Botonui("btnSonido",{left:"75x"},{left:"0px"});
    maquina.instruccion= new Botonui("instruccion",{left:"110%", "margin-left":"0px"},{left:"45.6%", "margin-left":"-100px"});
    console.log("main","asdasdasd");
    
    maquina.btnInfo.show(); //muestro boton info
   // maquina.btnSonido.show(); //muestro boton Sonido
    maquina.instruccion.hide(); //muestro instruccion
    maquina.btnListo.hide(); //oculto boton listo
    maquina.btnComenzar.hide(); //oculto boton comenzar
   $("#wraperinstruccion").hide();
    
    maquina.btnInfo.btnclick=function(){
        
        if(maquina.instruccion.showed){
            maquina.instruccion.hide();
            sonido.stop("INSTRUCCION");
            $("#wraperinstruccion").hide();
            
        }else{
            maquina.instruccion.show();
            $("#wraperinstruccion").show();
            sonido.play("INSTRUCCION");
        }
        
        
    };
    
    
    maquina.btnSonido.btnclick=function(){
        maquina.mute =  maquina.mute || false;
        if(maquina.mute){
            maquina.mute = false;
            $(maquina.btnSonido._dom).removeClass("btnSonidoMuted");
        }else{
            maquina.mute = true;
            $(maquina.btnSonido._dom).addClass("btnSonidoMuted");
        }
        sonido.setMute(maquina.mute);
    };
        
    maquina.btnListo.btnclick=function(){ //cuando se hace click en boton listo
        console.log("click en boton listo");
       if(maquina.isValid()){ //si el resultado es valido
            maquina._onUsrSuccess();
            maquina.onUsrSuccess();
            maquina.block(true);
            maquina._block(true);
            maquina.btnListo.hide();
           maquina.btnComenzar.show();
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
        maquina._onReset();
        maquina.block(false);
        maquina._block(false);
        maquina.btnComenzar.hide();
        maquina.reset();
        maquina.start();
        
    };
    
    $("#ready").click(maquina.btnListo.btnclick);
    $("#restart").click(maquina.btnComenzar.btnclick);
    
    $("#btnInfo").click(maquina.btnInfo.btnclick);
    $("#instruccion").click(maquina.btnInfo.btnclick);
    $("#btnSonido").click(maquina.btnSonido.btnclick);
    //maquina.btnListo._dom.addEventListener("click",maquina.btnclick); //seteo el evento click
    
    document.title = _cfg.title;
    $("#titulo").text(_cfg.title);    
    /*botones*/
    
    $(".sonidoover1").hover(function(a){ 
        if(a.type == "mouseenter"){
            sonido.play("OVERBOTON");
        }
    });
    $(".sonidoover2").hover(function(a){ 
        if(a.type == "mouseenter"){
            sonido.play("CONTROLES");
        }
    });
    
});

function Botonui(id,pHide,pShow){
    pHide = pHide ||  {left:"75px"};
    pShow = pShow || {left:"0px"};
    this.showed=undefined;
    this._dom=document.getElementById(id);

    this.show=function(){
        this.showed=true;
        for(var i in pShow){
            this._dom.style[i]=pShow[i];
        }
        $(this._dom).show();
    };
    
    this.hide=function(){
        this.showed=false;
        for(var i in pHide){
            this._dom.style[i]=pHide[i];
        }
        $(this._dom).hide();
        //if(this.btnclick) this.btnclick();
    };
} /*/*/

console.log("End maquinaBase.js");