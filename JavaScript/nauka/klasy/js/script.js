console.log('Klasy - definicja i tworzenie objektów');

// TO JEST PODSTAWOWY SZABLON KLASY

/* class Person {
    constructor() {

    }
} */
/* 
class Person {
    constructor(name, surName) {
        this.name = name;
        this.surName = surName;
    }

    printInfo() {
        console.log(`Imie: ${this.name}, Nazwisko: ${this.surName}`);
    }
}



let person = new Person("Mariusz", "Rutkowski");
// console.log(person);

person.printInfo();

let person2 = new Person('Ewelina', 'Walczak')
person2.printInfo();

let person3 = new Person('Adam', 'Nowak')
person3.printInfo(); */

// console.log(person)



// W STANDARDZIE ES5


function Person(name, surName) {
    this.name = name;
    this.surName = surName;
    this.printInfo = function () {
        console.log("Imie: " + this.name + ", Nazwisko:" + this.surName);
    }
}

// class Person {
//     constructor(name, surName) {
//         this.name = name;
//         this.surName = surName;
//     }

//     printInfo() {
//         console.log(`Imie: ${this.name}, Nazwisko: ${this.surName}`);
//     }
// }



let person = new Person("Mariusz", "Rutkowski");
// console.log(person);

person.printInfo();

let person2 = new Person('Ewelina', 'Walczak')
person2.printInfo();

let person3 = new Person('Adam', 'Nowak')
person3.printInfo();
