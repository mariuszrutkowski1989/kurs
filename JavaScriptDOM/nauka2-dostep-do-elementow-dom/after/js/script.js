console.log("Dostęp do elementów DOM");

// Metody zwracające pojedynczy 'Element' 

let articles = document.getElementById('articles');
console.log(articles);

let paragraph = document.querySelector('.content');
console.log(paragraph);


// Metody zwracające kolekcję 'HTMLCollection'

let paragraphs = document.getElementsByClassName('content');
console.log(paragraphs[1]);

let allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs);

let paragraphsContent = document.querySelectorAll('p.content');
console.log(paragraphsContent);