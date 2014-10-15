/* jshint -W117, -W098 */ //desactivo correcciones de  globales, y las declaraciones no usadas
var lastsize=-1;
var btnListo,btnComenzar;
var seleccionado;

window.onresize = resize;
window.ondeviceorientation  = resize;

function resize(){
     var wav;
    if(lastsize!=window.innerWidth+"_"+window.innerHeight){  
        var a=parseInt(Math.min(window.innerWidth/_cfg.width, window.innerHeight/_cfg.height)*_cfg.width);
        var h=parseInt(Math.min(window.innerWidth/_cfg.width, window.innerHeight/_cfg.height)*_cfg.height);
        var wi=Math.min(window.innerWidth/_cfg.width, window.innerHeight/_cfg.height);
        var wo=(Math.max(window.innerWidth, window.innerHeight)/900)*900;
        var wmar= ((window.innerWidth-(_cfg.width*wi))/2);
        var hmar= ((window.innerHeight-(_cfg.height*wi))/2);
        var bgp=wo+"px";
        
        
        var aspectRatio=(window.innerWidth/window.innerHeight);
        switch(_cfg.adaptMethod){
            case "responsive":
                $("#escena1").css("left",(192+((window.innerWidth-1280)/2))+"px");
                $("#fondoEscena").css("background-position-x",(((window.innerWidth-1280)/2))+"px");
                /*if(aspectRatio < 1.7){
                    document.body.style.width=window.innerWidth+"px";
                    document.body.style["background-size"]=bgp;
                }else{*/

                  /*  */
                //}
            break;
            case "scale":
                document.getElementById("superWrapper").style.transform="scale("+wi+","+wi+")";
                document.getElementById("superWrapper").style["-webkit-transform"]="scale("+wi+","+wi+")";
                document.getElementById("superWrapper").style["-ms-transform"]="scale("+wi+","+wi+")";
                document.body.style.width=window.innerWidth+"px";
                document.body.style.height=window.innerHeight+"px";
                document.body.style["background-size"]=bgp;
                document.getElementById("superWrapper").style.left=wmar+"px";
                document.getElementById("superWrapper").style.top=hmar+"px";
            break;
            case "hybrid":
                var wih;
                wih=wi;//*(1-aspectRatio);
                console.log("aspectRatio es mayor", aspectRatio);
                if(aspectRatio < (16/9)){ //si el aspectratio es mayor que 16:6
                    hmar=0;
                  //  if(aspectRatio > (9/6)){ //y si es menor que 9:6
                    
                    wi=window.innerWidth/_cfg.width;
                    wih=window.innerHeight/_cfg.height;
                   wav=wi * (window.innerWidth/(window.innerWidth*wi));
                  /*  }else{
                        
                        wih=wi*(9/6);
                    }*/
                        
                }
                $(".noscale").css("transform","scale("+(wav)+",1)");
                $(".noscale").css("-webkit-transform","scale("+(wav)+",1)");
                $(".noscale").css("-ms-transform","scale("+(wav)+",1)");
                
                document.getElementById("superWrapper").style.transform="scale("+wi+","+wih+")";
                document.getElementById("superWrapper").style["-webkit-transform"]="scale("+wi+","+wih+")";
                document.getElementById("superWrapper").style["-ms-transform"]="scale("+wi+","+wih+")";
                document.body.style.width=window.innerWidth+"px";
                document.body.style.height=window.innerHeight+"px";
                document.body.style["background-size"]=bgp;
                document.getElementById("superWrapper").style.left=wmar+"px";
                document.getElementById("superWrapper").style.top=hmar+"px";
                
            break;
        }
        
        
        

        console.log("background...",bgp);
        console.log("resize...",a,h);
        console.log("scale...",wi);
        console.log("wmar...",wmar);
        console.log("hmar...",hmar);
        lastsize=window.innerWidth+"_"+window.innerHeight;
    }
}



console.log("end base.js");