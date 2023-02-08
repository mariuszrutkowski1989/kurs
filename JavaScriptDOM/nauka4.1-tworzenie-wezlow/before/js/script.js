console.log("Tworzenie węzłów");

let liElement = document.createElement('li');
let txtNode = document.createTextNode('Seventh 7');
let attributeNode = document.createAttribute('class')
attributeNode.value = 'last';

liElement.appendChild(txtNode);
liElement.setAttributeNode(attributeNode);

let list = document.getElementById('list');
list.appendChild(liElement)

console.log(liElement);
console.log(txtNode);
console.log(attributeNode);
console.log(list);





