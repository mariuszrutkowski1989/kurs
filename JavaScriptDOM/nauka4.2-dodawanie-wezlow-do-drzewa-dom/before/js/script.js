console.log("Dodawanie węzłów do drzewa DOM");

let liElement = document.createElement('li');
let txtNode = document.createTextNode('Seventh (7)');
let attrNode = document.createAttribute('class');
attrNode.value = 'last';

liElement.appendChild(txtNode);
liElement.setAttributeNode(attrNode);

let list = document.getElementById('list');

// appendChild
// list.appendChild(liElement);

//TODO:

let documentFragment = new DocumentFragment();
documentFragment.appendChild(liElement);
list.appendChild(documentFragment); //W jakim momencie w takim razie sie tego uzywa? Jaka jest roznica pomiedzy dolaczeniem elementu przez to, a przez html/css?

// TODO: insertBefore

list.insertBefore(liElement, list.firstElementChild);

// TODO: replaceChild

list.replaceChild(liElement, list.firstElementChild);

//TODO:

list.lastElementChild.insertAdjacentElement('afterend', liElement)

//TODO:

list.firstElementChild.insertAdjacentHTML ('beforebegin', '<li>Zero (0)</li>');

//TODO:

list.lastElementChild.insertAdjacentText ('afterend', 'Spoko, chyba rozumiem');

console.log(liElement);
console.log(txtNode);
console.log(attrNode);
console.log(list);
// console.log(documentFragment);