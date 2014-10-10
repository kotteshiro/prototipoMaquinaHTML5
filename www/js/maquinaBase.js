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
    
};


//*****************

$(function(){
    maquina.btnListo= new Botonui("ready");
    maquina.btnComenzar= new Botonui("restart");

    maquina.btnListo.hide(); //oculto boton listo
    maquina.btnComenzar.hide(); //oculto boton comenzar

    maquina.btnListo.btnclick=function(){
       if(maquina.isValid()){ //si el resultado es valido
            maquina._onUsrSuccess();
            maquina.onUsrSuccess();
        }
    };
    
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
    this._dom.addEventListener("click",this.btnclick);
}
Botonui.prototype.show=function(){
    this._dom.style.top="20px";
};
Botonui.prototype.hide=function(){
    this._dom.style.top="75px";
};
Botonui.prototype.btnclick=function(){
    alert("listo");
};
console.log("End maquinaBase.js");