/* jshint -W117, -W098 */ //desactivo correcciones de  globales, y las declaraciones no usadas
function version(){
  console.log("Version:" , _cfg.version );
}
function showAndHide(selector,time){
    time=time||1300;
    $(selector).css("transform", "scale(1)"); //se muestra el mensaje
    setTimeout(function(){
        $(selector).css("transform", "scale(0)"); //se oculta el mensaje
    },time); //luego de 'time' ms
}
function TODO(desc){
    console.warn("TO-DO:", desc);
}
/*boton*/



/*endboton*/