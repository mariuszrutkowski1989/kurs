$(document).ready(function() {
    const heading = $('h1');

    $('#animate').click(function(){
        heading.animate({opacity: 0.3, fontSize: '3em'}, 2000, function(){
            $(this).after('<p>No i co kurwa kliknąłeś?</p>')
        })
    })

});



