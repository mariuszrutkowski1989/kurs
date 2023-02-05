console.log("Ustawianie i pobieranie klas (class) elementów HTML");

let list = document.getElementById('list');
let firstEl = list.firstElementChild;
let lastEl = list.lastElementChild;

firstEl.setAttribute('class', 'blueviolet');

firstEl.className = firstEl.className + ' first';

lastEl.classList.add('last');
lastEl.classList.add('special');
lastEl.classList.add('blueviolet');

lastEl.classList.remove('special');

lastEl.classList.toggle('super-special');
lastEl.classList.toggle('super-special');

console.log(list);
console.log(firstEl.className);
console.log(lastEl.classList);