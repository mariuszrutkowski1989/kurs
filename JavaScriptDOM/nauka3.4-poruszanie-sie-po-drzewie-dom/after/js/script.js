console.log("Poruszanie się po drzewie DOM");

let list = document.getElementById('list');

console.log(list); // list
console.log(list.childNodes); // list.childNodes
console.log(list.children); // list.children

console.log(list.firstChild); // list.firstChild
console.log(list.firstElementChild); // list.firstElementChild
console.log(list.lastChild); // list.lastChild
console.log(list.lastElementChild); // list.lastElementChild



let firstElementChild = list.firstElementChild;
let lastElementChild = list.lastElementChild;



console.log(firstElementChild.parentNode); // firstElementChild.parentNode
console.log(firstElementChild.parentElement); // firstElementChild.parentElement

console.log(firstElementChild.nextSibling); // firstElementChild.nextSibling
console.log(firstElementChild.nextElementSibling); // firstElementChild.nextElementSibling

console.log(lastElementChild.previousSibling); // lastElementChild.previousSibling
console.log(lastElementChild.previousElementSibling); // lastElementChild.previousElementSibling

console.log(firstElementChild.hasChildNodes());
console.log( (firstElementChild.children.length > 0) ? true : false );

console.log(firstElementChild.closest('#list')); // firstElementChild.closest('#list') 