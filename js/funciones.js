$(document).ready( function(){

    console.log("Documento Cargado")





$("#rotulo_inferior a").click( function() {
    
    console.log("Hago clic sobre formulario");
    

    $(".screen_fixed").css({ 
        "width": "100%",
        "height": "100%",
        "z-index":"9",
        "background": "rgba(0,0,0,0.5)",
       
    });

    

    $(".formulario").addClass("menu_close")
        
    $(".formulario").css({ 
        "z-index":"10",
    });
        
});
 
    


$(".screen_fixed").click(function(){
    
    
    $(".screen_fixed").css({ 
        "width": "0",
        "height": "0",
        "z-index":"20",
        "background": "rgba(0,0,0,0)",
       
    });

    $(".formulario").toggleClass("menu_close")
    
    
});

$(window).scroll(function(){
    var px_scroll = $(this).scrollTop();
    console.log("Pixeles de scroll: "+px_scroll)

    var offset_contenedor = $("#parrafo_info").offset().top;
    console.log(offset_contenedor);

    var px_ventana = $(window).height()/2;
    console.log(px_ventana);

    if(px_scroll + px_ventana > offset_contenedor){
        console.log("HAGO");
        $("#parrafo_info").addClass("aparece")
    }
});

$(window).scroll(function(){
    var px_scroll = $(this).scrollTop();
    console.log("Pixeles de scroll: "+px_scroll)

    var offset_contenedor = $("#certificaciones").offset().top;
    console.log(offset_contenedor);

    var px_ventana = $(window).height()/2;
    console.log(px_ventana);

    if(px_scroll + px_ventana > offset_contenedor){
        console.log("HAGO");
        $("#certificaciones").addClass("surge")
    }
});

$(".logo_burger").click(function(){
    
    
    $(".menu_movil_open").toggleClass("menu_open");
    
});

});
