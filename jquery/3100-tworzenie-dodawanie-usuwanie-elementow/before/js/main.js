$(document).ready(function(){
    
    const newLi = $('<li class="list-item">To jest kurwa nowo stworzona lista, jestem Bogiem, wyobraź to sobie sobie</li>')
    console.log(newLi);

    //dodanie na początku elementu
    $('ul').prepend(newLi);

    //dodanie na koncu i wewnatrz znacznika w tym wypadku UL, metoda pozwala bezposrednio dodawac
    $('ul').append('<li class="list-item">To jest kurwa nowo stworzona lista, jestem Bogiem, wyobraź to sobie sobie</li>');

    $('ul').before('<h3 class="list-item">To jest kurwa nowo stworzona lista, jestem Bogiem, wyobraź to sobie sobie</h3>');

    $('ul').after('<h3 class="list-item">To jest kurwa nowo stworzony naglowek, jestem Bogiem, wyobraź to sobie sobie</h3>');

    const newFooter = $('<footer>Autor: Twoja stara</footer>')

    $('h3').after(newFooter);

    $('h2').empty();

    $('h2').append('Twoja stara')

    $('p').remove();

});

