console.log("Ustawianie i pobieranie klas (class) elementów HTML");

let list = document.getElementById('list');

console.log(list);

let firstElement = list.firstElementChild;
let lastElement = list.lastElementChild;

firstElement.setAttribute('class', 'blueviolet');

firstElement.className = firstElement.className + ' first'; //tu pamiętać o spacji, w sumie logiczne;)

lastElement.classList.add ('last');
lastElement.classList.add ('special');
lastElement.classList.add ('blueviolet')

lastElement.classList.remove('special');

lastElement.classList.toggle('super-special');

lastElement.classList.toggle('super-special'); // usuwa klasę jeśli istnieje / dodaje jeśli nie istnieje - toggle

console.log(lastElement);
console.log(firstElement.className);
console.log(lastElement.classList);


