console.log("Usuwanie węzłów z drzewa DOM");

let list = document.getElementById ('list');

console.log(list);

list.removeAttribute('id')
list.removeChild(list.lastElementChild);
list.lastElementChild.remove();