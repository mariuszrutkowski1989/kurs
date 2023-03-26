console.log('Fetch API');

// Fetch API (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - to nowy interfejs do pobierania i wysyłania danych za pomocą HTTP. Jest podobne do 'XMLHttpRequest', ale ma więcej możliwości. Pisanie zapytań przy użyciu Fetch API jest szybsze i przyjemniejsze niż za pomocą 'XMLHttpRequest'.

// Fetch API definiuje 2 główne obiekty:
// - Request - https://developer.mozilla.org/en-US/docs/Web/API/Request
// - Response - https://developer.mozilla.org/en-US/docs/Web/API/Response
// Oraz dostarcza globalnej funkcji 'fetch()', przy pomocy której programista dokonuje zapytań AJAX.

// Fetch API prowadzi także wsparcie dla CORS.

// CORS (ang. Cross-origin resource sharing ) - mechanizm bezpieczeństwa umożliwiający współdzielenie lub blokowanie zasobów pomiędzy serwerami. A ściślej rzecz biorąc chodzi o możliwość (lub jej brak) wykonywania żądań AJAX. https://pl.wikipedia.org/wiki/Cross-Origin_Resource_Sharing

// Przykłady użycia 'Fetch API' -https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

setInterval(() =>{
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.name);
        console.log(data.email);
    });
}, 10000)

