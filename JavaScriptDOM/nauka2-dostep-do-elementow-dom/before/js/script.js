console.log("Dostęp do elementów DOM");

//TODO: metody zwracajace pojedynczy 'element'

let articles = document.getElementById('articles');

console.log(articles);

///////////////////////////

let paragraph = document.querySelector(".content");
console.log(paragraph); //ta metoda wyszukuje pierwszy z elementow i go zwraca

//TODO: Metody zwracajace kolekcje 'HTMLCollection'

let paragraphs = document.getElementsByClassName("content");

console.log(paragraphs);

console.log(paragraphs[1]);

//////////////////////////////////

let allParagraphs = document.getElementsByTagName('p');

console.log(allParagraphs);

console.log(allParagraphs.length);

console.log(allParagraphs[5]);

//////////////////////////////////


let paragraphContent = document.querySelectorAll('p.content')

console.log(paragraphContent);