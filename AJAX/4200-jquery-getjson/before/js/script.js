console.log('jQuery - $.getJSON()');

$(document).ready(function() {

    // jQuery - $.getJSON() => https://api.jquery.com/jQuery.getJSON/
    // za pomocą tej metody można pobierać dane tylko w formacie JSON

    $.getJSON('https://jsonplaceholder.typicode.com/users/1', function (data) {
        console.log(data);
        console.log(data.name);
        console.log(data.email);
    });

    $.getJSON('https://jsonplaceholder.typicode.com/users/1')
    .done(function(data) {
        console.log(data);
        console.log(data.name);
        console.log(data.email);
    })
    .fail(function(error) {
        console.log(error);
    });

});