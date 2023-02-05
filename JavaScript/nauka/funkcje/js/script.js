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

// console.log("Funkcje - deklaracja, parametry, return")

//TODO: Ogarnij czym jest funkcja. Deklaracja funkcji po kolei: Zaczynamy od słowa kluczowego function, po spacji podajemy nazwę funkcji, następnie nawias okrągły w którym mieszczą się ... i nawias klamrowy, w którym mieści się ciało funkcji -> instrukcje, które będą wykonywane po wywołaniu funkcji. FUNKCJĘ TRZEBA WYWOŁAĆ

// Aby wywołać funkcję, należy podać jej nazwę i nawiasy, w tym wypadku przedstawMnie();

// function przedstawMnie() {
//     console.log('Mam na imię Mariusz');
// }

// przedstawMnie();

//TODO: Wyrażenie funkcyjne i funkcja anonimowa -> jej wywołanie, to wywołanie stałej, w tym wypadku wypiszMojeImie();

// const wypiszMojeImie = function () {
//     console.log("Moje imie to mariusz");
// }

//TODO: FUNKCJA MOZE PRZYJMOWAC PARAMETRY / MOZNA NADAC WARTOSC PARAMETROW, KTORA ZADZIALA, GDY TEN NIE ZOSTANIE WYWOLANY

/* 
function przedstawMnie(imie, nazwisko = 0, zawod = '', wiek = '') {
    console.log(`Mam na imię ${imie} ${nazwisko}. Zajmuję się ${zawod}, mam ${wiek} lata`);
    console.log(`Milo Cie poznac ${imie}`);
}



przedstawMnie("Mariusz", "Rutkowski", "Fotografią", 34);
przedstawMnie("Monika")


 */

// TODO: Funkcja może np. dodawać, przykład:

/* const dodawanie = function(num1 = 0, num2 = 0) {
    let wynik = num1 + num2;
    console.log(wynik);
}

dodawanie(4,7)

const iloczyn = function(num3 = 123, num4 = 1, num6 = 100) {
    let wynikMnozenia = num3 * num4 / num6;
    console.log(wynikMnozenia);
}

iloczyn(iloczyn.num3, iloczyn.num6)

//TODO: 

let liczbaMansa = 108;
let liczbaPierwsza = 230;

iloczyn(liczbaMansa, liczbaPierwsza, iloczyn.num6) */

const mnozenieLiczb = function (num1 = 0, num2 = 2) {
    let wynik = num1 * num2;

    return wynik;
}

console.log(mnozenieLiczb(2, 5));

let wynikMnozenia = 0;

wynikMnozenia = mnozenieLiczb(2, 6);

console.log(wynikMnozenia);

//TODO: ES6, czyli napiszmy sobie funkcję strzałkową, mnożącą dwie liczby. Funkcja strzałkowa przyjmuje jeden parametr tylko

const dzielenie = num => num * num;

console.log(dzielenie(5));

//TODO: ciag fibbonaciego

// const fibonacci = function (num1 = 0, num2 = 1) {
//     let result = num1 + num2;
//     console.log(result);
// }

const fibonacci = (n) => {
    let a = 0, b = 1, c = n;

    for (let i = 2; i <= n; i++) {

        c = a + b;
        a = b;
        b = c;

    }

    return c;
};

console.log(fibonacci(10));

//TODO: powtorka petli

// let listaOsob = ['typ1', 'typ5', 'typ7', 'typ3']

// for (let i=0; i<) {
//     console.log(object);
// }

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

// const doKwadratu = x => x * x; //jezeli istnieje taka sytuacja z jednym parametrem, nie ma potrzeby uzywania nawiasow (logiczne). Dodatkowo, nie ma potrzeby okreslania 'return' skoro wystepuje tu pojedyncze dzialanie. 
/* 
let wynik = doKwadratu(3);

console.log(wynik);

// Przyklad funkcji strzalkowej

// ["Mariusz", "Piotr", "Ewelina"].forEach(function(el) {
//     console.log(el);
// }
// )

["Mariusz", "Piotr", "Ewelina"].forEach(el => console.log(el)) //Najlepszy przyklad tego, jak funkcje strzalkowe skracaja zapis */
