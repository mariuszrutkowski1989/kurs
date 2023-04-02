console.log('Serwisy do testowania AJAX');

// Serwisy do testowania AJAX:
// - ReqRes - https://reqres.in/ 
// - JSON Placeholder - https://jsonplaceholder.typicode.com/

//JSON placeholder

//ReqRes

let user = {
    "first_name": "Mariusz",
    "last_name": "Rutkowski",
}

fetch('https://reqres.in/api/users', {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(user),

    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((error) => {
        console.log(error);
    });

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

