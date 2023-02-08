console.log("Dodawanie i zmiana styli CSS elementów HTML");

let list = document.getElementById ('list')

let firstElement = list.firstElementChild;
let lastElement = list.lastElementChild;

firstElement.style.color = 'red' //to jest inline - czy tego uzywamy w takim razie?

console.log(firstElement.style.color);
console.log(document.querySelector('h1 > span'));
// console.log(document.querySelector('h1 > span'));

lastElement.style.display = 'none';

