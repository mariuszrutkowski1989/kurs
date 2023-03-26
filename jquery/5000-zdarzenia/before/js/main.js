$(document).ready(function () {

    $('#click-button').click(function () {
        $('h1').toggleClass('color-orange');
        $(this).css('background-color', 'black');
    })


    //można i tak se piznąć, najpierw napisać funkcję, potem jej użyć

    function changeFontSize(e) {
        e.preventDefault();
        $(this).text('I CO KURWA KLIKASZ FRAJERZE?')
    }

    $('a').on('click', changeFontSize)

    $('#click-button').on({
        focus: function () {
            $(this).css('border', '30px solid red')
        },
        blur: function () {
            $(this).css('border', '0px solid black')
        },
    })

    $('#remove-event').click(function () {
        $('a').off('click', changeFontSize);

        $('click-button').off('click');

        $('#click-button').off(); //to usuwa wszystkie wczesniejsze parametry
    });


    // $('a').on('click', function(e) {
    //     e.preventDefault();
    //     var currentFontSize = parseInt($(this).css('font-size'));
    //     $(this).css('font-size', (currentFontSize + 10) + 'px');
    // });
});

