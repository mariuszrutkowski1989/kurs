console.log('Skrypt dziala');

// function title(name = 'Akademia108') {
//     let sortedName = name.sort();
//     return sortedName;
// }


// ZADANIE 2

/* function sortString(str) {
    return str.split('').sort().join('');
}

let sortedString = sortString("Akademia108");
console.log(sortedString);
 */

// ZADANIE 1
/* 
function oppString(str2) {
    return str2.split('').reverse().join('');
}

let oppositeString = oppString('Akademia108');
console.log(oppositeString);
 */
// ZADANIE 3


// Wewnątrz funkcji zdefiniowane są dwie zmienne lokalne: sum i product, które służą do przechowywania wyniku sumy i iloczynu elementów tablicy.

// Na początku, obie zmienne są ustawione na wartości początkowe: sum na 0 i product na 1. Następnie, przy użyciu pętli for przeglądamy każdy element tablicy numbers. W każdym kroku pętli, wartość elementu jest dodawana do zmiennej sum oraz mnożona przez product.

/* function calculateSumAndProduct(arr) {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        product *= arr[i];
    }
    console.log("Sum: " + sum);
    console.log("Product: " + product);
}

calculateSumAndProduct([1, 2, 3, 4, 5, 6]); */

// Funkcja calculate_sum_and_product przyjmuje jeden parametr - tablicę numbers z liczbami.

// Kiedy pętla zostanie przejrzana, zmienne sum i product zawierają już wynik sumy i iloczynu elementów tablicy. Następnie, funkcja wyświetla te wartości na ekranie za pomocą funkcji console.log();.

// Na końcu funkcja jest wywoływana z tablicą [1, 2, 3, 4, 5, 6] jako argumentem, co kończy proces i pozwala na uzyskanie wyniku sumy i iloczynu tych liczb.

//ZADANIE 4

// function calculateSumSquare(arr)    {
//     let result = 0;
//     for (let i = 0; i < arr.lenght; i++) { //Ja pierd literowka w length XD
//         result += Math.pow(arr[i], 2);
//     }
//     return result;
// }

// const array = [0, 1, 2, 3, 4, 5];
// console.log(calculateSumSquare(array));

/* function sumOfSquares(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += Math.pow(numbers[i], 2);
        // result = result + Math.pow(numbers[i], 2);
    }
    return result;
} */

/* Ten kod definiuje funkcję "sumOfSquares", która przyjmuje jeden argument - tablicę liczb. Następnie, funkcja tworzy zmienną "result", którą inicjalizuje na 0. Następnie, funkcja przeprowadza pętlę "for" przez każdy element tablicy "numbers". Wewnątrz pętli, funkcja korzysta z metody "Math.pow" do obliczenia kwadratu każdego elementu tablicy i dodaje go do zmiennej "result". Po zakończeniu pętli, funkcja zwraca wartość zmiennej "result". Na końcu, kod tworzy tablicę "array" i wywołuje funkcję "sumOfSquares" z tą tablicą jako argument, a następnie drukuje wynik na konsoli. Wynik tego kodu będzie sumą kwadratów każdego elementu tablicy. */

// const array = [0, 1, 2, 3, 4, 5];
// console.log(sumOfSquares(array));

// ZADANIE 5

//Skomplikowane rozwiazanie jako przyklad / Wzor Bineta

// function fibbonacci(n) {
//     if(n<2) return n;
//     let f = (1+ Math.sqrt(5)) / 2;
//     return Math.round((f**n - (f - 1)**n) * Math.sqrt(5) / 5)
// }

// for(i = 0; i < 30; i++) console.log(fibbonacci (i));

/// 

// function fibbonacci(n) {
//     if (n == 0) return 0;
//     if (n == 1) return 1;
//     return fibbonacci(n - 1) + fibbonacci(n - 2);
// }

// console.log(fibbonacci(12)); //DZIALA

// ZADANIE 6

// let jsonPracownicy = {
//     "pracownicy": [
//         { "firstName": "Krystian", "lastName": "Dziopa" },
//         { "firstName": "Anna", "lastName": "Szapiel" },
//         { "firstName": "Piotr", "lastName": "Żmuda" }
//     ]
// }

// jsonPracownicy.pracownicy.forEach(function (element, index) {
//     console.log(`Element z indeksem: ${index} ma wartosc ${element.firstName} ${element.lastName}`);

// }); // JENY, TEZ DZIALA <3

/* console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function(element, index) {
console.log(index + ": " + element.firstName + " " + element.lastName);
}); // DZIALA */



// // ZADANIE ULA

/* let array = [

    {
        imie: "Ula",
        nazwisko: "Jeziorna",
        plec: "kobieta",
        hobby: ["bieganie", "taniec", "malowanie"],
        ulubioneJedzenie: { owoce: [{ kwasne: ['wiśnie', 'cytryna', 'kiwi'], slodkie: ['melon', 'arbuz', 'truskawki'] }], warzywa: ['sałata', 'pomidory', 'marchewka'], slodycze: ['ciasta', 'czekolada'] }
    },
    {
        imie: "Krystian",
        nazwisko: "Dziopa",
        plec: "mężczyzna",
        hobby: ["programowanie", "medytacja"]
    },
    {
        imie: "Łukasz",
        nazwisko: "Badocha",
        plec: "mężczyzna",
        hobby: ["rower", "góry", "bieganie"]
    },
    {
        imie: "Marian",
        nazwisko: "Drągalski",
        plec: "mężczyzna",
        hobby: ["wspinanie", "rower", "karate", "gotowanie"]
    },
]; */
/* 
console.log(array[3].imie);
console.log(array[1].hobby[1]);
console.log(array[2].hobby);
console.log(array[0].ulubioneJedzenie.owoce[0].slodkie[1]); // Czemu tu owoce - 0?
console.log(array[0].ulubioneJedzenie.slodycze[1]);
console.log(array[0].ulubioneJedzenie.owoce[0].kwasne[1]); */ /// Przeiteruj po niej petlami / for / forEach / forOf / Plus petle na prostej tablicy -> pojedyncze elementy tablicy.


class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }


    opiszKsiazke() {
        return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i ${this.przeczytana ? "została przeczytana" : "nie została przeczytana"}.`
    }
}



const ksiazka1 = new Ksiazka("Wiedźmin", "Andrzej Sapkowski", true);
const ksiazka2 = new Ksiazka("Brave New World", "Aldous Huxley", false);
const ksiazka3 = new Ksiazka("Mort", "Terry Pratchett", false);

const ksiazki = [ksiazka1, ksiazka2, ksiazka3];

function iloscPrzeczytanych(ksiazki) {
    let przeczytane = 0;
    ksiazki.forEach((ksiazka) => {
        console.log(ksiazka.opiszKsiazke()); // wrzucam na wszelki wypadek :)
        if (ksiazka.przeczytana) przeczytane++;
    });
    return przeczytane;
}

console.log(`Ilość przeczytanych książek: ${iloscPrzeczytanych(ksiazki)}`);



