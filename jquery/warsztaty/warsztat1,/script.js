console.log('Czy to dziala?');

$(document).ready(function(){

    console.log('działa?');

    $('.accordion-item').click(function(){
        console.log('klika sie');

        if($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).find('.accordion-content').slideUp(1000);
        } else {
            $(this).addClass('open');
            $(this).find('.accordion-content').slideDown(1000);
        }


    });

})

