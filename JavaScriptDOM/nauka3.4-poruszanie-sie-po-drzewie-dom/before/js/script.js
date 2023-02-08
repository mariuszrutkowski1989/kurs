console.log("Poruszanie się po drzewie DOM");

let list = document.getElementById('list');

// console.log(list);

// console.log(list.childNodes);

// console.log(list.children);

// console.log(list.firstChild);

// console.log(list.firstElementChild);

// console.log(list.lastChild);

// console.log(list.lastElementChild);


let firstElementChild = list.firstElementChild;
let lastElementChild = list.lastElementChild;

console.log(firstElementChild);
console.log(lastElementChild);

console.log(firstElementChild.parentNode.parentNode);
console.log(firstElementChild.parentElement);

//TODO: RODZENSTWO

// console.log(firstElementChild.nextSibling);

// console.log(firstElementChild.nextElementSibling);

// console.log(lastElementChild.previousSibling);

// console.log(lastElementChild.previousElementSibling);


//TODO:

console.log(firstElementChild.hasChildNodes());

console.log((firstElementChild.children.lenght > 0) ? true : false);


console.log(firstElementChild.closest('#list'));  