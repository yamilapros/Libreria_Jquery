/*Vamos a poner a menu en false, porque NO SE VE*/
let menu = false;
$(document).ready(function(){
    /*Mostrar Dropdown menu al hacer click en burguer*/
    $('#colapsable').click(function(){
        if(menu == false){
            $('.menu-contenido-movil').css('top', '8vh');
            menu = true
        }else{
            $('.menu-contenido-movil').css('top', '-100%');
            menu = false
        }
    })

    /*Al hacer Scroll : Menu top se haga de color*/
    /*Se usa un evento de window : scrollTop : Nos dice a cuanto estamos del Top ! */
    $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        //console.log(scroll)
        if(scroll >= 250){
            $('.menu-escritorio').addClass('menu-scroll-top')
        }else{
            $('.menu-escritorio').removeClass('menu-scroll-top')
        }
    })
})