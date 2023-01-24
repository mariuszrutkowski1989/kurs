/* console.log('Obiekty');

// W tablicach dane sa przypisane do kluczy liczbowych, 0,1,2...etc. - sa to indeksy. W obiektach tworzymy klucze samodzelnie.

var person = { //Zmienna, ktora przechowuje nasz obiekt, nazywa sie INSTANCJA tego obiektu. Obiekty przechowuje sie zawsze w nawiasach klamrowych.
    name: 'Mariusz',
    height: 180,
    print: function() {
        console.log("Mam na imie:" + this.name); //this pozwala odwolac sie do wewnetrznych pol obiektu
    },
    printThis: function() {
        console.log("Jestem metodą obiektu 'printThis' i zaraz uruchomię wewnetrzna metode 'print' ");
        this.print();
    }
}

//aby odwolac sie do pol obiektu, stosujemy ponizszy zapis:

console.log(person.name);

person.print();

// drugi sposob:

console.log(person['height']);

person['print']();

person.printThis();


//

person.height = 190; // tak sie zmienia

person.weight = 75; //tak sie dodaje

console.log(person);

//

var woman = {
    name: 'Monika',
    height: 165,
}

let {name, height} = woman;

console.log(name); */


//OBIEKTY W ES5 i ES6

var person = { //Zmienna, ktora przechowuje nasz obiekt, nazywa sie INSTANCJA tego obiektu. Obiekty przechowuje sie zawsze w nawiasach klamrowych.
    name: 'Mariusz',
    height: 180,
    print: function() {
        console.log("Mam na imie:" + this.name); //this pozwala odwolac sie do wewnetrznych pol obiektu
    },
    printThis: function() {
        console.log("Jestem metodą obiektu 'printThis' i zaraz uruchomię wewnetrzna metode 'print' ");
        this.print();
    }
}

/* console.log(person['height']);

person['print']();


// slowo kluczowe this /// uzywamy gdy chcemy sie odwolac do elementow wewnatrz

person. height = 181;

console.log(person);

// person.weight - 75;

var women = {
    name: 'Ewelina',
    height: 165
} */


// ES6

let personES6 = {
    name: 'Ewelina',
    height: 165,
    print() {
        console.log("Mam na imie:" + this.name); //this pozwala odwolac sie do wewnetrznych pol obiektu
    },

    printThis() {
        console.log("Jestem metodą obiektu 'printThis' i zaraz uruchomię wewnetrzna metode 'print' ");
        this.print();
    }
}

personES6.printThis();