
$(document).ready(function(){

    tabs();
    

    function tabs(){
        //El primer item que tenga la clase active
        $('.tabs-nav li a:first').addClass('active');
        //Primero Ocultar todos los div de contenido
        $('.contenido').hide();
        //Mostrar primer div
        $('.contenido:first').show();

        $('.tabs-nav li a').click(function(){
            //Remuevo la clase active en los que la tengan y la activo en este, el seleccionado3
            $('.tabs-nav li a').removeClass('active');
            $(this).addClass('active');

            //Oculto todos los contenidos 
            $('.contenido').hide();
            //Tengo que sacar el href del li que se haya seleccionado 
            let contenidoActivo = $(this).attr('href');
            $(contenidoActivo).fadeIn(400);
            return false;
        })
        
    }
    
})
