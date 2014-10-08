/* jshint -W117, -W098 */ //desactivo correcciones de  globales, y las declaraciones no usadas
var lastsize=-1;
var _cfg={
	title: "LAS MULTIPLICACIONES",
	titlestyle: "bold 27px Trebuchet MS, Helvetica, sans-serif",
	width: 900,
	height: 600,
	version: "0.5.2"
};
var btnListo,btnComenzar;

window.onresize = resize;
window.ondeviceorientation  = resize;

function resize(){
    if(lastsize!=window.innerWidth+"_"+window.innerHeight){  
        var a=parseInt(Math.min(window.innerWidth/_cfg.width, window.innerHeight/_cfg.height)*_cfg.width);
        var h=parseInt(Math.min(window.innerWidth/_cfg.width, window.innerHeight/_cfg.height)*_cfg.height);
        var wi=Math.min(window.innerWidth/_cfg.width, window.innerHeight/_cfg.height);
        var wo=(Math.max(window.innerWidth, window.innerHeight)/900)*900;
        //if(a<=_cfg.width && h <= _cfg.height){
             
            //director.setScale(Math.min(window.innerWidth/_cfg.width, window.innerHeight/_cfg.height),Math.min(window.innerWidth/_cfg.width, window.innerHeight/_cfg.height));
            document.getElementById("superWrapper").style.transform="scale("+wi+","+wi+")";
            document.getElementById("superWrapper").style["-webkit-transform"]="scale("+wi+","+wi+")";
            document.getElementById("superWrapper").style["-ms-transform"]="scale("+wi+","+wi+")";
       /* }else{
            document.body.style.transform="scale(1,1)";
        }*/
        /*document.getElementById("wrap").style.width=a+"px";
        document.getElementById("wrap").style.height=h+"px";
*/  

        document.body.style.width=window.innerWidth+"px";
        document.body.style.height=window.innerHeight+"px";
        var wmar= ((window.innerWidth-(_cfg.width*wi))/2);
        var hmar= ((window.innerHeight-(_cfg.height*wi))/2);
        document.getElementById("superWrapper").style.left=wmar+"px";
        document.getElementById("superWrapper").style.top=hmar+"px";
        var bgp=wo+"px";
       document.body.style["background-size"]=bgp;
      
        //document.getElementById("_c").style.top=Math.round(sobraheight/2)+"px";
        //document.getElementById("_c").style.left=Math.round(sobrawidth/2)-13+"px";

        console.log("background...",bgp);
        console.log("resize...",a,h);
        console.log("scale...",wi);
        console.log("wmar...",wmar);
        console.log("hmar...",hmar);
        lastsize=window.innerWidth+"_"+window.innerHeight;
    }
}
$(function(){
    $(".boton").click(function(am){ 
        $(".boton").removeClass("btnSelected"); 
        $(am.currentTarget).addClass("btnSelected"); 
    });
    document.title = _cfg.title;
    $("#titulo").text(_cfg.title);
    
    
    /*botones*/
    btnListo= new Botonui("ready");
    btnComenzar= new Botonui("restart");
    btnListo.hide();
    btnComenzar.hide();
});




