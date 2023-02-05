console.log("Zmiana tekstu i znaczników w elementach HTML");

let h1 = document.querySelector('h1');

console.log(h1.innerText);
console.log(h1.innerHTML);
console.log(h1.outerHTML);

// h1.innerText = 'DOM - <span>Document Object Model</span>';
// h1.innerHTML = 'DOM - <span>Document Object Model</span>';
h1.outerHTML = 'DOM - <span>Document Object Model</span>';