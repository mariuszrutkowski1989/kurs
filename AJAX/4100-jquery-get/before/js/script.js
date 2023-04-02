console.log('jQuery - $.get()');

$(document).ready(function () {

    // jQuery - $.get() => https://api.jquery.com/jQuery.get/
    // za pomocą tej metody można pobierać dane w jakimkolwiek formacie (np. JSON, XML)

    // $.get('https://jsonplaceholder.typicode.com/users/1', function(data){
    // console.log(data);
    // console.log(data.name);
    // console.log(data.email);
    // });


    $.get('https://jsonplaceholder.typicode.com/users/1')
        .done(function (data) { //metoda .done odpowiada za dane które przyjdą i nadają się do użycia
            console.log(data);
            console.log(data.name);
            console.log(data.email);
        })
        .fail(function (error){
            console.error(error)
        })
});
