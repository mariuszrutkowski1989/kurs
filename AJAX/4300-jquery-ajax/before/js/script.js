console.log('jQuery - $.ajax()');

$(document).ready(function () {

    // jQuery - $.ajax() => https://api.jquery.com/jquery.ajax/
    // za pomocą tej metody można pobierać/wysyłać dane w jakimkolwiek formacie (np. JSON, XML) i za pomocą jakiejkolwiek metody (GET, POST, PUT, DELETE, OPTION)

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/1',
        statusCode: {
            200: function() {
                console.log('dziala!');
            }
        },
        success: function (data) {
            console.log(data);
            console.log(data.name);
            console.log(data.email);
        },
        error: function (error) {
            console.error(error); //console.error wyswietla nam na czerwono w konsoli
        },
    });


    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/1',
        statusCode: {
            200: function () {
                console.log('dziala!');
            }
        },

    })
        .done(function(data) {
            console.log(data);
            console.log(data.name);
            console.log(data.email);
        })
        .fail(function(error) {
            console.error(error);
        })

});
