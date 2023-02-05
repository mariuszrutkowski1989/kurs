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

// usage of DocumentFragment NODE TYPE
// let documentFragment = new DocumentFragment();
// documentFragment.appendChild(liElement);
// list.appendChild(documentFragment);

// insertBefore
// list.insertBefore(liElement, list.firstElementChild);

// replaceChild
// list.replaceChild(liElement, list.firstElementChild);

// insertAdjacentElement
// list.lastElementChild.insertAdjacentElement('afterend', liElement);

// insertAdjacentHTML
// list.firstElementChild.insertAdjacentHTML('beforebegin', '<li>Zero (0)</li>')

// insertAdjacentText
// list.lastElementChild.insertAdjacentText('beforeend', ' :)');

console.log(liElement);
console.log(txtNode);
console.log(attrNode);
console.log(list);
// console.log(documentFragment);