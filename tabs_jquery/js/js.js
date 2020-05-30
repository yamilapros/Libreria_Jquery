
$(document).ready(function(){

    tabs();
    

    function tabs(){
        //Primero Ocultar todos los div de contenido
        $('.contenido').hide();
        //Mostrar primer div
        $('.contenido:first').show();
        $('.tabs-nav li').click(function(){
            //Remuevo la clase active en los que la tengan y la activo en este, el seleccionado
            $('.tabs-nav li').removeClass('active');
            $(this).addClass('active');
            //Oculto todos los contenidos 
            $('.contenido').hide();
            //Tengo que sacar el href del li que se haya seleccionado 
            let contenidoActivo = $(this).find('a').attr('href');
            $(contenidoActivo).fadeIn(1000);
        })
    }
    
})
