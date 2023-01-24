console.log("Tablice - indeksowanie tablic");

let names = ['Mariusz', 'Ewelina', 'Ania'];

let menNames = ['Robert', 'Bartek', 'Grzegorz'];

let womenNames = new Array('Basia', 'Asia', 'Kasia'); // To inny sposob na stworzenie tablicy

/* 
names[1] = 'Basia';
names[2] = 'Marek';

let [imieProgramisty, imieSekretarki, imieGrafika] = names;

console.log(imieProgramisty);

// Jak sprawdzic ilosc elementow?
// W konsoli jest lenght
 */

// Metoda push

// let arrayLenght = names.push('Monika');

// metoda join

// let strArray = names.join(' - ');

// console.log(names);
// console.log(strArray);

// Odwrocenie elementow

// let reversedArray = names.reverse();

// Metoda sort

/* let sortedArray = names.sort();  // z automatu sortuje wedlug alfabetu

console.log(sortedArray); */

// metoda concat - laczenie tablic

let concatArray = names.concat(menNames, womenNames);

console.log(concatArray);

// Metoda INDEX OF

let indexOfArray = names.indexOf('Ania')

console.log(indexOfArray);

// Metoda MAP

// let mappedArray = names.map(function(element, index) {
//     let newElement = element.toUpperCase() + ' - ' + index;
//     return newElement;
// });

// console.log(mappedArray);

// METODA FILTER

let filteredArray = names.filter ( element  => element.startsWith('A') );

console.log(filteredArray);


// Objekt ma pola, tablica ma elementy
// właściwości objektu.