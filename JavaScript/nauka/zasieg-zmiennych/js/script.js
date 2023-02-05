console.log("Sprawdzamy");

// imie = "Marek" //SLOWO KLUCZOWE - HOISTING. Działa ze zmienna var, nie dziala z let // Hoisting polega na wynoszeniu deklaracji zmiennych i funkcji „na górę” kodu (konkretnie na początek funkcji lub do zakresu zmiennych

// console.log(imie);

// var imie = "Mariusz";


/* function wyswietlImie() {
    var imie = "Monika"; //zmienna lokalna zostanie zawsze uzyta jako pierwsza, jako ta wazniejsza od globalnej.
    console.log(imie); //czemu w tym wierszu wyskakuje mi blad w konsoli? - bo zapomnialem o nawiasie XD
    var nazwisko = "Rutkowski";
    console.log(nazwisko);
}

wyswietlImie(); */

// console.log(imie);

// console.log(nazwisko); To nie będzie działało z prostej przyczyny - zmienna nazwisko obecnie odnosi sie do body funkcji tylko i wylacznie - bedac tutaj, odnosiloby sie to do zmiennej lokalnej w funkcji. W tym wypadku warto wiedziec, ze console.log bedzie odnosil sie do zmiennej globalnej, wyswietlajac ja jako nastepna w kolejnosci po zmiennej lokalnej

/* if (imie = "Mariusz") {
    var wiek = 30
    console.log(wiek);
}

console.log(wiek); */

// Powyzej sytuacja troche inaczej wyglada, w warunku np. taka zmienna jak powyzszy wiek, bedzie sie pojawiala w konsoli. JEZELI JEDNAK przeniesiemy ten warunek do powyzszej funkcji, sytuacja sie zmieni:

/* function wyswietlImie() {
    var imie = "Monika"; 
    console.log(imie);
    var nazwisko = "Rutkowski";
    console.log(nazwisko);

    if (imie == "Monika") {  //Tu ważne, bo znowu przegapiłem - w warunku 2x == - tak jak tutaj, aby dzialalo.
        var wiek = 30;
        console.log(wiek);
    }
}

wyswietlImie();
 */

/* Inaczej rzecz wygląda ze znienna let. ZMIENNA LET MA ZASIEG BLOKOWY - BLOK KODU ZAMKNIETY NAWIASAMI KLAMROWYMI. Zmienna var natomiast, ma zasieg FUNKCYJNY */


let imie = 'Mariusz';

// console.log(imie);

function wyswietlImie() {
    var imie = 70;
    var nazwisko = 'Rutkowski';
    console.log(imie);
    console.log(nazwisko);

    if (imie >= 0) {
        var wiek = 30;
    
        console.log(wiek);
    }
}

wyswietlImie()
