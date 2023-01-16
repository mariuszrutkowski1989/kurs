/* console.log("Funkcje - deklaracja, parametry, return")

przedstawMnie();

function przedstawMnie() {
    console.log("Mam na imię Mariusz")
} // zadeklarowana w ten sposob funkcja dziala niezaleznie od polozenia w kodzie, dlatego jej wywolanie nad nia, nadal dziala.


przedstawMnie();
przedstawMnie();

const wypiszMojeImie = function () {
    console.log("Moje imie to Mariusz")
} //W tym przypadku jednak definicja funkcji nie moze byc wywolana, gdy znajduje sie nad tym zapisem - consola o tym informuje

wypiszMojeImie();
wypiszMojeImie();
wypiszMojeImie(); */

console.log("Funkcje - deklaracja, parametry, return")

// czescdruga

/* function przedstawMnie(imie = "Mariusz") {
    console.log(`Mam na imie ${imie}`);
    console.log(`Miło cię poznać ${imie}`); //Tutaj zostaly uzyte backticki. Te znajdziesz nie pod cudzyslowem, a pod tyldą - to ważne.
}

// przedstawMnie("Mariusz");
// przedstawMnie("Bartek");
przedstawMnie();


const wypiszMojeImie = function () {
    console.log("Moje imie to Mariusz");
}

const dodajLiczby = function (liczba1 = 0, liczba2 = 0) {
    let wynik = liczba1 + liczba2;
    console.log(wynik);
}

let liczbaMansa = 108;
let liczbaPierwsza = 1;
let liczbaDruga = 10;

dodajLiczby(liczbaMansa, liczbaPierwsza);
dodajLiczby(liczbaMansa, 123);
dodajLiczby(64, 8);

// wypiszMojeImie(); */

// Czesc trzecia

/* const mnozenieLiczb = function (liczba1 = 0, liczba2 = 0) {
    let wynik = liczba1 * liczba2;

    return wynik;
}

let wynikMnozenia = 0;

wynikMnozenia = mnozenieLiczb(4, 5);

console.log( mnozenieLiczb(2, 4) );

console.log(wynikMnozenia) */

// Czesc czwarta, bolesna

// const doKwadratu = function(x = 0) {
//     return x * x;
// }

/* const doKwadratu = (x = 0) => {
    return x * x; // to nowy sposob zapisu, pozwalajacy skrocic zapis i costam XD
} */

const doKwadratu = x => x * x; //jezeli istnieje taka sytuacja z jednym parametrem, nie ma potrzeby uzywania nawiasow (logiczne). Dodatkowo, nie ma potrzeby okreslania 'return' skoro wystepuje tu pojedyncze dzialanie. 

let wynik = doKwadratu(3);

console.log(wynik);

// Przyklad funkcji strzalkowej

// ["Mariusz", "Piotr", "Ewelina"].forEach(function(el) {
//     console.log(el);
// }
// )

["Mariusz", "Piotr", "Ewelina"].forEach(el => console.log(el)) //Najlepszy przyklad tego, jak funkcje strzalkowe skracaja zapis
