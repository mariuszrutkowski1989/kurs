console.log('Dziala?');


let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokyo', 'Moscow'];

console.log(cities);

let list = document.getElementById('city-list');

for (let i = 0; i < cities.length; i++) {
    let item = document.createElement('li');
    item.innerHTML = (i + 1) + '. ' + cities[i];
    item.classList.add('city');
    list.appendChild(item);
}

console.log(list);

console.log(document);


//Dziaaaaalaaaaa

// FIXME:

// tablica cities z nazwami miast:

// let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokyo', 'Moscow'];

// Metoda map() tworzy nową tablicę, w której każdy element jest wynikiem wywołania określonej funkcji na każdym elemencie tablicy wyjściowej. W naszym przypadku każdy element tablicy cities jest przekształcany w ciąg tekstowy z elementem listy, który zawiera numer miasta i nazwę miasta.

// cities.map((city, index) => `<li class="city">${index + 1}. ${city}</li>`)

// Metoda join('') łączy wszystkie elementy tablicy w jeden ciąg tekstowy, używając określonego separatora (w naszym przypadku pustego separatora).

// Ostatecznie, używamy selektora, aby uzyskać dostęp do elementu listy i ustawić jego wnętrze na wynik działania map() i join():

// document.querySelector('#city-list').innerHTML =

// document.querySelector('#city-list').innerHTML = cities.map((city, index) => `<li class="city">${index + 1}. ${city}</li>`).join('');

//TODO:

// let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokyo', 'Moscow'];
// let cityList = document.querySelector('#city-list');

// for (let i = 0; i < cities.length; i++) {
//   let listItem = document.createElement('li');
//   listItem.className = 'city';
//   listItem.textContent = `${i + 1}. ${cities[i]}`;
//   cityList.appendChild(listItem);
// }


//TODO://// Zadanie 2

// const button = document.querySelector("button");

// const list = document.querySelector("#items");

// let counter = list.childElementCount + 1;

// button.addEventListener("click", function() {
//   const newItem = document.createElement("li");
//   newItem.className = "item";
//   newItem.innerHTML = "Item " + counter;
//   list.appendChild(newItem);
//   counter++;
// });