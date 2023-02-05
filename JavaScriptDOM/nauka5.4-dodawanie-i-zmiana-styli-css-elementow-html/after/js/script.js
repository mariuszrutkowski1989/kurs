console.log("Dodawanie i zmiana styli CSS elementów HTML");

let list = document.getElementById('list');
let firstEl = list.firstElementChild;
let lastEl = list.lastElementChild;

firstEl.style.color = 'red';

console.log(list);
console.log(firstEl.style.color);
console.log(document.querySelector('h1 > span'));
console.log(document.querySelector('h1 > span').style.color);

lastEl.style.display = 'none';