/* jshint -W117, -W098 */ //desactivo correcciones de  globales, y las declaraciones no usadas
function version(){
  console.log("Version:" , _cfg.version );
}

function Botonui(id){
    this._dom=document.getElementById(id);
}
Botonui.prototype.show=function(){
    this._dom.style.top="20px";
};
Botonui.prototype.hide=function(){
    this._dom.style.top="75px";
};
