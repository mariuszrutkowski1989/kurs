console.log("Pętla - for");

/* 

for ([inicjalizacja]; [warunek]; [(in/de)krementacja]) {

    ...instrukcje JavaScript 

}

 */

let arrStudents = ['Ania', 'Kasia', 'Marek', 'Darek'];

for (let i = 0; i < arrStudents.length; i++) {
    // console.log('Iteracja: ' + i);
    console.log(arrStudents[i]);
}


/////////////////////////////////////////////////////////////

console.log("Pętla - for...in");

/* 

let obiekt = {
  pole1: 'wartosc1',
  pole2: 'wartosc2',
};

for (let nazwaPola in obiekt) {
  console.log(`${nazwaPola} --> ${obiekt[nazwaPola]}`);
}

*/

let car = {
    typ: 'Stara',
    model: 'Twoja',
    rok: '1984',
};

for (let key in car) {
    console.log(`Nazwa ${key}: ${car[key]}`);
}

/////////////////////////////////////////////////////////////

console.log("Pętla - for...of");

/* 

let array = [1, 2, 3];

for (let variable of array) {
  ...instrukcje JavaScript
}

*/

let arrsStudents = ['Ania', 'Kasia', 'Marek', 'Darek'];

for (let element of arrsStudents) {
    console.log(element);
}

let slowo = "Akademia 108";

for (let element of slowo) {
    console.log(slowo);
}

//W tym wypadku wyswietli w konsoli wszystkie elementy stringa

//////////////////////////////////////////////////////////

console.log("Pętla - forEach");

/* 

let array = [1, 2, 3];

array.forEach( function(element, index) {
  ...instrukcje JavaScript
});

*/

let arrssStudents = ['Ania', 'Kasia', 'Marek', 'Darek'];

arrssStudents.forEach(function(element, index){
    console.log(`Element z indeksem: ${index} ma wartosc ${element}`);
})

///////////////////////////////////////////////////////////

console.log("Pętla - while");

/* 

while (warunek) {
    ...instrukcje JavaScript
}

*/

// let password = null;

// while (password !== "secret") {
//     password = prompt("Podaj hasło")
// }

// alert("Zalogowano: zaraz zobaczysz tresc strony");

/////////////////////////////////////////////////////////////////

/* 

do {
    ...instrukcje JavaScript
} while (warunek)

*/

// let isLoggedIn = true;

// do {
//     pass = prompt("Podaj hasło");
//     if (pass === "secret") {
//       isLoggedIn = true;
//     }
// } while (!isLoggedIn)

// alert("Zalogowano :) zaraz zobaczysz treść strony");

/////////////////////////////////////////////////////////////////

console.log("Pętle - instrukcja break");

// break - przerywa aktualnie wykonywaną pętlę

/* let array = [1, 2, 3, 108, 4, 5, 6];


for ( let i=6; i<array.length; i--) {
    if(array[i] === 108) {
        break;
    }
    console.log(array[i]);
    
}

console.log('---------------------------------------------------');

for (const element of array) {

    if(element === 108) {
        break;
    }
    console.log(element);
    
}
 */

////////////////////////////////////////////////////////////////////////////

console.log("Pętle - instrukcja continue");

// continue - przerywa aktualnie wykonywaną iterację pętli

let array = [1, 2, 3, 108, 4, 5, 6];

for (let i=0; i<array.length; i++) {
    
    if (array[i] === 108) {
        continue;
    }
    console.log(array[i]);
}

console.log("----------------");

for (const element of array) {
    
    if (element === 108) {
        continue;
    }
    console.log(element);
}