$(document).ready(function () {

    // $('.list-item').css('margin-left', '15px');

    $('.list-item').each(function(index){

        $(this).css('margin-left', index * 10 + 'px')

    })

});

