$(document).ready(function(){

    let headingText = $('h2').text(); //
    console.log(headingText);

    console.log($('h2').text());//to se zrobilem w ramach sprawdzenia

    let parContent = $('p').eq(0).html();
    console.log(parContent);

    $('h2').text('Jakiś kurwa inny tytuł');

    $('h2').html('Kurwa <span>spam</span>'); //Te metody podmieniają cała zawartość znacznika

    $('#name').val('Twoja stara');

    $('#contact-form').submit(function(index){
        index.preventDefault();
        console.log($('#name').val());
    })
});

