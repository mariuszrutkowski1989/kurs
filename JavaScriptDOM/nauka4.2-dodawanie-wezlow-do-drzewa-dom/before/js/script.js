console.log("Dodawanie węzłów do drzewa DOM");

let liElement = document.createElement('li');
let txtNode = document.createTextNode('Seventh (7)');
let attrNode = document.createAttribute('class');
attrNode.value = 'last';

liElement.appendChild(txtNode);
liElement.setAttributeNode(attrNode);

let list = document.getElementById('list');

// appendChild
list.appendChild(liElement);

console.log(liElement);
console.log(txtNode);
console.log(attrNode);
console.log(list);