// console.log('działa?');

// todo:
// ! 
// ?
// *

//! LEKCJA 1

// console.log('łojezus, LOG');

// window.alert('JEZUS MARIA, ALERT');

//! LEKCJA 2

let fName = 'Mariusz'; //TODO: STRINGS

let iq = 60; //TODO: NUMBERS

let mensaTest = true; //TODO: BOOLEAN

// console.log(iq);
// console.log('HELLO', firstName, "with a", iq, "IQ. You passed a Mensa test - you`re", mensaTest, 'fuckin genius');

// //TODO Wywoływanie po id

document.getElementById('p1').innerHTML = 'Witaj ' + fName;
document.getElementById('p2').innerHTML = 'Masz IQ: ' + iq;
document.getElementById('p3').innerHTML = 'Jesteś z siebie dumny? <br><br> Wniosek do sklep mięsny: ' + mensaTest;

//! LEKCJA 3

// znak dodawania +
// znak odejmowania -
// znak mnożenia *
// znak dzielenia /
// znak modulo - reszty z dzielenia: %
// znak potegowania **
// 
let uczniowie = 200;

//todo Skrót zapisu uczniowie = uczniowie / 2
//? uczniowie /= 2; 

let dodatkowiUczniowie = uczniowie % 9;
let iloscUczniowKlasa = (uczniowie - dodatkowiUczniowie) / 9 

// //TODO Wywoływanie po id

document.getElementById('p4').innerHTML = 'Mamy w szkole ' + uczniowie + ' obiboków';
document.getElementById('p5').innerHTML = 'Każda z klas będzie liczyła ' + iloscUczniowKlasa + ' obiboków';
document.getElementById('p6').innerHTML = 'Możemy sobie pozwolić na stworzenie 9 klas. <br><br> W takim razie, bez klasy pozostaje ' + dodatkowiUczniowie + ' obiboków';

//! LEKCJA 4

//todo: Łatwa opcja inputu usera

// let imieUsera = window.prompt('JAKIE JEST TWOJE IMIE?');

// console.log(imieUsera);

let imieUsera;

//todo: Trudniejsza opcja inputu usera

document.getElementById('btn-submit').onclick = function() {
    imieUsera = document.getElementById('myText').value;
    // console.log(imieUsera);
    document.getElementById('moj-label').innerHTML = 'No siemanko ' + imieUsera;
};

//! LEKCJA 5

// Zmiana typu zmiennej

// let wiek = window.prompt('Ile masz lat?');

let wiek;

// console.log(typeof wiek); //? do sprawdzania typu

document.getElementById('btn-wiek').onclick = function() {
    wiekUsera = document.getElementById('myWiek').value;
    // console.log(imieUsera);
    wiekUsera = Number(wiekUsera);
    document.getElementById('wiek-label').innerHTML = 'Jezus Maria, masz ' + wiekUsera + ' lata';
};

//todo przykłady zmiany typu

/* let x;
let y;
let z;

x = Number('3.14');
y = String (3.14);
z = Boolean ("ksksks"); //! Pozostawiony pusty nawias, zawsze oddaje FALSE - warte zapamiętania

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); */

//! LEKCJA 6

//stałe [const]

const PI = 3.14159;
let radius;
let circumference;

// radius = window.prompt('Podaj średnicę koła');
radius = Number(radius);

circumference = 2 * PI * radius;

// console.log('The circumference');

document.getElementById('p8').innerHTML = 'Liczba pi wynosi: ' + PI;

//! LEKCJA 7

// Metody
/* 
let x = 3.14;
let y = 5;
let z = 9;

let maximum;
let minimum;
 */
//TODO:

// x = Math.round(x); //?Zaokrąglanie

// x = Math.floor(x); //?Zaokrąglanie w dół

// x = Math.ceil(x); //?Zaokrąglanie w górę

// x = Math.pow(x, 2); //?Potęgowanie

// x = Math.sqrt(x); //?Pierwiastek

// x = Math.abs(x) //?Odległość od zera

// maximum = Math.max(x, y, z); //?Max ze zbioru zmiennych
// minimum = Math.min(x, y, z); //?Min ze zbioru zmiennych

// x = Math.PI;

// console.log(x);

//! LEKCJA 8

// Program obliczający przeciwprostokątną trójkąta

let a;
let b;
let c;

document.getElementById('button-trojkat').onclick = function() {
    a = document.getElementById('trojkat-a').value;
    b = document.getElementById('trojkat-b').value;
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById('przeciwprostokatna').innerHTML = 'Długość C wynosi ' + c;
    // document.getElementById('trojkat-label-a').innerHTML = 'Dlugosc przeciwprostokątnej wynosi ' + a;
};

//! LEKCJA 9

// Program liczący

let cunt = 0; //hyhy

document.getElementById('decrease-btn').onclick = function() {
    cunt -=1; // cunt = cunt - 1;
document.getElementById('cuntLabel').innerHTML = cunt;
}

document.getElementById('reset-btn').onclick = function() {
    cunt = 0; // cunt = 0;
document.getElementById('cuntLabel').innerHTML = cunt;
}

document.getElementById('increase-btn').onclick = function() {
    cunt +=1; // cunt = cunt + 1;
document.getElementById('cuntLabel').innerHTML = cunt;
}

//! LEKCJA 10

// Generator losowych numerów

let kostkaSzesc = Math.floor(Math.random() * 6) + 1; //? klasyczna kostka 6

let kostkaDwadziescia = Math.floor(Math.random() * 20) + 1; //? klasyczna kostka 20

// console.log(kostkaSzesc);
// console.log(kostkaDwadziescia);

//Robimy trzy kosci-szostki

let x1;
let y1;
let z1;
let wynikRzutu;



document.getElementById('rzuc-koscia').onclick = function() {

    x1 = Math.floor(Math.random() * 6) + 1;
    y1 = Math.floor(Math.random() * 6) + 1;
    z1 = Math.floor(Math.random() * 6) + 1;

    wynikRzutu = x1 + y1 + z1;

    document.getElementById('wynik-rzutu').innerHTML = 'Wyrzuciłeś ' + wynikRzutu + '<br><br> <span style="color: red">UMIERASZ</span>';

}

//! LEKCJA 11

//?Przydatne stringi

// let userName = 'Twoja Stara';

// let nameLenght = userName.length;

// console.log(userName.length);
// let firstLetter = userName.charAt(0);

// console.log(firstLetter);

// console.log(userName.indexOf('a'));

// console.log(userName.lastIndexOf('a'));

// //TODO: Tniemy spacje

// userName = userName.trim();
// userName = userName.toUpperCase();
// userName = userName.toLowerCase();

// console.log(userName);

// //TODO: Zastępujemy

// let phoneNumber = '0-800-400-200'

// phoneNumber = phoneNumber.replaceAll('-', '/')

// console.log(phoneNumber);

//! LEKCJA 12

//TODO: Cięcie ciągów znaków

// let fullName = 'Jezus Maria';
// let firstName;
// let lastName;

// // firstName = fullName.slice(0, 5);
// // lastName = fullName.slice(6);
// firstName = fullName.slice(0, fullName.indexOf(" "));
// lastName = fullName.slice(fullName.indexOf(" ") + 1)

// console.log(firstName);
// console.log(lastName);

//! LEKCJA 13

// TODO: Łączenie metod w jednej linii kodu - można to robić zawsze, tak jak poniżej. Banał.

// let userName = 'stara';

// let letter = userName.charAt(0).toUpperCase().trim();
// // letter = letter.toUpperCase();

// console.log(letter);

//! LEKCJA 14 

// //TODO: Warunki IF

// let age = 67;

// if(age >= 18){ //!JEŚLI [IF]... == początek warunku
//     console.log('JESTEŚ DOROSŁY');
// }
// else if(age < 0){ //! JEDNAKŻE, JEŚLI [ELSE IF] ... == dodatkowy warunek 
//     console.log('Jesteś niedorodzony');
// }
// else if(age >=65){
//     console.log('jestes seniorem'); //?kolejność jest ważna - przechodzi po kolei, dlatego aktualnie wyswietlane jest "jestes dorosly"
// }
// else{ //! A JEŚLI NIE, TO [ELSE]... == koniec warunku
//     console.log('Jesteś dzieciakiem');
// }

// let online = true;

// if(online){
//     console.log('jestes online');
// }
// else{
//     console.log('jestes offline');
// }

//! LEKCJA 15

//TODO: sprawdzanie checboxow

document.getElementById('myButton').onclick = function(){

    const myCheckBox = document.getElementById('myCheckBox');
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheckBox.checked) { //todo: opcjonalnie można zapisać ... .checked == true [oznacza to to samo, co checked]
        console.log('udalo sie, zapisany');

    }
    else{
        console.log('chuja sie udalo, niezapisany');
    }

    if(visaBtn.checked) {
        console.log('wybrales vise');
    }
    else if(mastercardBtn.checked){
        console.log('wybrales mastercard');
    }
    else if(paypalBtn.checked){
        console.log('wybrales paypal');
    }
    else{
        console.log('niczego nie wybrano');
    }

}

//! LEKCJA 16

//todo: SWITCHE

let ocena;

document.getElementById('gradeButton').onclick = function(){

    //? To jest klasyczne wyjście, jednak ze zbyt dużą ilością else if
    // const myGrade = document.getElementById('myGrade');
    // const sixBtn = document.getElementById("six-btn");
    // const fiveBtn = document.getElementById("five-btn");
    // const fourBtn = document.getElementById("four-btn");
    // const threeBtn = document.getElementById("three-btn");
    // const twoBtn = document.getElementById("two-btn");
    // const oneBtn = document.getElementById("one-btn");

    // if(sixBtn.checked) {
    //     document.getElementById('ocena-koncowa').innerHTML = 'Nerd jebany';
    // }
    // else if(fiveBtn.checked){
    //     document.getElementById('ocena-koncowa').innerHTML = 'I co się chwali?';
    // }

    //? To jest switch

    ocena = document.getElementById('wpisz-ocene').value
    
    if (ocena === "") {
        document.getElementById('ocena-koncowa').innerHTML = 'NIC NIE WPISAŁEŚ';
    }

    else {    
        switch(true){
            case ocena >= 90:
                document.getElementById('ocena-koncowa').innerHTML = 'Szóstka!';
                break;
            case ocena >= 80:
                document.getElementById('ocena-koncowa').innerHTML = 'Piątka!';
                break;
            case ocena >= 70:
                document.getElementById('ocena-koncowa').innerHTML = 'Czwórka';
                break;
            case ocena >= 55:
                document.getElementById('ocena-koncowa').innerHTML = 'Trójka';
                break;
            case ocena >= 35:
                document.getElementById('ocena-koncowa').innerHTML = 'Dwójka, jezu';
                break;
            case ocena < 35:
                document.getElementById('ocena-koncowa').innerHTML = 'JEDYNKA, WYLATUJESZ CIULU';
                break;
            default:
                document.getElementById('ocena-koncowa').innerHTML = 'JEDYNKA,  CIULU';
                break;
    }
}
}

//! LEKCJA 17

//TODO: 

// let x = '3.14'; //? =

// if(x == 3.14) { //? ==
//     console.log('that is pi');
// }
// else{
//     console.log('That is NOT pi');
// }

// if(x === 3.14) { //? ===
//     console.log('that is pi');
// }
// else{
//     console.log('That is NOT pi');
// }

//! LEKCJA 18

//TODO:

// let temperatura = 34;

// //? W ten sposób np. można sprawdzić zakres wartości danej zmiennej. Poniżej sprawdzam jaka jest pogoda - jeżeli temperatura jest powyżej zera i poniżej 30 stopni, wtedy jest ok.

// if(temperatura > 0 && temperatura < 30){
//     console.log('pogoda jest ok');
// }

// else{
//     console.log('pogoda nie jest ok');
// }

// //? W ten sposób sprawdzam, jaka jest pogoda - jeżeli temperatura jest poniżej zera LUB powyżej 30 stopni - jest chujowa

// if(temperatura <= 0 ||  temperatura >= 30){
//     console.log('pogoda jest chujowa');
// }

// else{
//     console.log('pogoda nie jest chujowa');
// }


// let temperatura = 29;
// let sunny = false;

// //TODO: Wyjaśnienie = Jeśli temperatura za oknem wynosi więcej niż 0 stopni, a mniej niż 30 stopni, LUB jest słonecznie - wtedy pogoda jest spoczko. Jeśli jednak jest inaczej, czyli albo temperatura wynosi mniej niż 0 stopni, albo ponad 30 - wtedy nie jest spoczko, CHYBA ŻE jest słonecznie - wtedy jest.

// if(temperatura >0 && temperatura <30 || sunny) {
//     console.log('jest spoczko');
// }

// else {
//     console.log('nie jest spoczko');
// }

//! LEKCJA 19 

// TODO: NIELOGICZNY ŁOPERATOR

// let temp = -15;
// let sunny = true;

// if(!(temp>0)){
//     console.log('jest zimno');
// }

// else{
//     console.log('jest ciepło');
// }

// //? Wyjaśnienie zapisu - jeśli nie jest słonecznie [sunny = false], jest pochmurnie, jednak w każdym innym wypadku jest słonecznie [sunny = false]

// if(!sunny){
//     console.log('jest pochmurnie');
// }

// else {
//     console.log('jest słonecznie');
// }