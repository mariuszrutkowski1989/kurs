$(document).ready(function () {

    //dodawanie atrybutu
    $('#about h2').attr('id', 'main-heading');

    //wywolanie atrybutu
    let titleValue = $('a').eq(1).attr('title');
    console.log(titleValue);

    //usuwanie atrybutu
    $('section').removeAttr('id')

    //dodawanie/odejmowanie/sprawdzanie klas

    $('section').addClass('main-section');

    $('.description').removeClass('description');

    console.log($('section').hasClass('main-section'));

    //przelaczanie klas

    $('p').toggleClass('content');

    //dodanie nowej klasy

    $('p').addClass('twoja-stara');
});

// Zadanie 3

$(document).ready(function () {

    $("#count-sum").click(function () {

        var sum = 0;

        $(".salary").each(function () {

            sum += parseInt($(this).text());

        });

        $("#sum").text(sum + " PLN");

    });
});

//Zadanie 2

$(document).ready(function () {
    // przyciski i paragrafy
    var button1 = $("<button>Przenieś ostatni paragraf na początek</button>");
    var button2 = $("<button>Przenieś pierwszy paragraf na koniec</button>");

    var paragraphs = $("<div></div>");

    for (var i = 1; i <= 5; i++) {
        paragraphs.append($("<p>To jest paragraf " + i + "</p>"));
    }

    $("body").append('<br>', '<br>', '<br>', '<br>', '<br>', button1, button2, paragraphs);

    // Obsługa pierwszego przycisku
    button1.click(function () {
        var lastParagraph = paragraphs.children().last();
        paragraphs.prepend(lastParagraph);
    });

    // Obsługa drugiego przycisku
    button2.click(function () {
        var firstParagraph = paragraphs.children().first();
        paragraphs.append(firstParagraph);
    });
});

//Zadanie 1

// $(document).ready(function() {
//     // Tworzenie przycisku i kwadratu
//     var button = $("<button>Rozpocznij animację</button>");
//     var square = $("<div></div>").css({
//       "height": "200px",
//       "width": "200px",
//       "background-color": "red",
//       "position": "relative" // dodana pozycja początkowa
//     });
//     $("body").append(button, square);

//     // Obsługa przycisku
//     button.click(function() {
//       square.animate({
//         "left": "+=100px",
//         "height": "100px",
//         "width": "100px"
//       }, 3000, function() {
//         square.css({
//           "background-color", "blue"
//         }, 5000, function() {
//           square.append("<h2>Animacja zakończona</h2>");
//         });
//       });
//     });
//   });

// $(document).ready(function() {
//     // Tworzenie przycisku i kwadratu
//     var button = $("<button>Rozpocznij animację</button>");
//     var square = $("<div></div>").css({
//       "height": "200px",
//       "width": "200px",
//       "background-color": "red",
//       "position": "relative" // dodana pozycja początkowa
//     });
//     $("body").append(button, square);

//     // Obsługa przycisku
//     button.click(function() {
//       square.animate({
//         "left": "+=100px",
//         "height": "100px",
//         "width": "100px"
//       }, 3000, function() {
//         square.css("background-color", "blue").delay(5000); // ustawienie koloru tła kwadratu za pomocą metody "css"
//         setTimeout(function() {
//           square.append("<h2>Animacja zakończona</h2>");
//         }, 5000);
//       });
//     });
//   });

$(document).ready(function () {
    // Tworzenie przycisku i kwadratu
    var button = $("<button>Rozpocznij animację</button>");
    var square = $("<div></div>").css({
        "height": "200px",
        "width": "200px",
        "background-color": "red",
        "position": "relative" // dodana pozycja początkowa
    });
    $("body").append(button, square);

    // Przycisk
    button.click(function () {
        square.animate({
            "left": "+=100px",
            "height": "100px",
            "width": "100px"
        }, 3000, function () {
            square.animate({
                "backgroundColor": "blue"
            }, 5000, function () {
                square.append("<h2>Animacja zakończona</h2>");
            });
        });
    });
});




