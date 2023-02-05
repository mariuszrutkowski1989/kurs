console.log("Drzewo węzłów (ang. nodes) DOM i rodzaje węzłów");

let node = document;


// Node.nodeType == ELEMENT_NODE (1)
// node = document.documentElement;
// node = document.head;
// node = document.body;
// node = document.getElementById('articles');


// Node.nodeType == ATTRIBUTE_NODE (2)
// console.log(document.getElementById('articles').childNodes);
// node = document.getElementById('articles').childNodes[3].attributes[0]; // id attribute
// node = document.getElementById('articles').childNodes[3].attributes[1]; // class attribute


// Node.nodeType == TEXT_NODE (3)
// console.log(document.getElementsByClassName('content'));
// console.log(document.getElementsByClassName('content')[0].childNodes);
// node = document.getElementsByClassName('content')[0].childNodes[0]; // text node


// Node.nodeType == COMMENT_NODE (8)
// console.log(document.getElementById('articles').childNodes);
// node = document.getElementById('articles').childNodes[1]


// Node.nodeType == DOCUMENT_NODE (9)
// node = document;


// Node.nodeType == DOCUMENT_TYPE_NODE (10)
// node = document.doctype;


// Node.nodeType == DOCUMENT_FRAGMENT_NODE (11)
let documentFragment = new DocumentFragment();
node = documentFragment;
let articles = document.getElementById('articles');
let article2 = document.createElement('article');
article2.innerText = 'Lorem ipsum 108';
documentFragment.appendChild(article2);
articles.appendChild(documentFragment)



// checking Node.nodeType
if (node.nodeType === Node.ELEMENT_NODE) { // Node.nodeType == 1
    console.log(`ELEMENT_NODE`);

} else if (node.nodeType === Node.ATTRIBUTE_NODE) { // Node.nodeType == 2
    console.log(`ATTRIBUTE_NODE`);

} else if (node.nodeType === Node.TEXT_NODE) { // Node.nodeType == 3
    console.log(`TEXT_NODE`);

} else if (node.nodeType === Node.COMMENT_NODE) { // Node.nodeType == 8
    console.log(`COMMENT_NODE`);

} else if (node.nodeType === Node.DOCUMENT_NODE) { // Node.nodeType == 9
    console.log(`DOCUMENT_NODE`);

} else if (node.nodeType === Node.DOCUMENT_TYPE_NODE) { // Node.nodeType == 10
    console.log(`DOCUMENT_TYPE_NODE`);

} else if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) { // Node.nodeType == 11
    console.log(`DOCUMENT_FRAGMENT_NODE`);

} else {
    console.log(`Inny typ węzła`);

}

console.log(node);
console.log(node.nodeType);