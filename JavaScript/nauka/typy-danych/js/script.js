// Typy jebane

console.log("Typy danych");

// Typy PRYMITYWNE

// 1.typ number / zalezy mu tylko na numerkach.

let numerPierwszy = 108;
let numerDrugi = 100;

console.log(numerPierwszy + numerDrugi)

// 2.typ string / ciagi znakow / tekstowe - duzo gada, malo robi.

let mojeImie = "Mariusz ";
let mojeNazwisko = 'Rutkowski';

console.log(mojeImie + mojeNazwisko);

// 3. typ logiczny - true/false - konkretny typ, typ sie nie pitoli.

let jestJakis = true;

/* if (jestJakis) {
    console.log(mojeImie + "jest jaki jest");
} */

// 4. Typy puste w srodku / - null - zmienna niby jest, ale nic nie zostalo do niej przypisane. Uzywamy do zerowania jakiejs zmiennej - przyklad ponizej, gdy id jest zapisane z bledem, wiec konsola wypuszcza "null" wlasnie. — Typ Ziobro.

// przyklad

/* let object = null;
let mainHeading = document.getElementById("main-heding");

if (jestJakis) {
    console.log(mainHeading);
} */

// 5. Typ undefined / nie-wiadomo-o-co-mu-chodzi. Niby jest, ale jakby nie wie co robi, po co to robi, dlaczego to robi. Jak mu nie powiesz co ma robic, bedzie jedynie stal i ladnie lub brzydko wygladal.

let typuUndefined; //zmienna tego typu zostala zadeklarowana, ale jeszcze nigdy nie zostala zdefiniowana

if (jestJakis) {
    console.log(typuUndefined);
}

//6. Typ Symbol - wyzsza szkola jazdy, tajemniczy typ z bogatym wnetrzem lub bagazem doswiadczen. Co do niego zycie wsadzilo, to tam bedzie - poznasz jak sie dopchasz.

let symbol = Symbol(); //WAŻNE użycie wielkich/małych liter tworzy dwie rozne wartosci

/* const osoba = {
    name: "Mariusz",
    occupation: "typ",
    [symbol]: "tajne haslo",
}

symbol = Symbol();

osoba[symbol] = "tajne dane"

console.log(osoba[symbol]);

const symbols = Object.getOwnPropertySymbols(osoba);

for (let sym of symbols) {
    console.log(osoba[sym]);
} */


            // TYPY REFERENCYJNE vel. typy złożone



let number = 108;
let secondNumber = number;

secondNumber = 200; // tak oto zmienilismy wartos secondNumber

// console.log(secondNumber)


        // Tablice - tu rzecz ma sie inaczej

let tablica = [1, 2, 3];
let drugaTablica = tablica;

// Zmienne referencyjne takie jak powyzej nie wskazuja wartosci w tablicy, ale wskaznik - reke wskazujaca przyslowiowa. W tym przypadku zmienna drugaTablica wskazuje NA TA SAMA TABLICE, NA JEJ ZAWARTOSC / Liczymy od 0.

drugaTablica[2] = 108;

// console.log(tablica);

// Obiekty - przekazujemy wskaznik, a nie wartosc. Czyli tak samo jak powyzej

let osoba = {
    name: "Mariusz",
    age: 25,
};

let drugaOsoba = osoba;

drugaOsoba.age = 44;

console.log(osoba);

// sprawdzanie typow zmiennych

console.log(typeof number);
console.log(typeof secondNumber);

console.log(typeof osoba);
console.log(typeof tablica);

let isarray = drugaTablica instanceof Array; // sprawdzamy czy drugaTablica jest tablica

console.log(isarray);

console.log(typeof isarray);
