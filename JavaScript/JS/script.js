

let name = 'Mariusz';

name = 'Monika';

let = number = 8;

let boolean = true;

let array = [1, 2, 3, 4, 108];

let objectH1 = document.querySelector('h1');

objectH1.innerText = 'Kurs Javascript';

// if (number === 108) {
//     console.log('Spełniony warunek number === 108');
// }   else if (number === 110) {
//     console.log('Spełniony warunek === 110');
// }   else {
//     console.log('Żaden z powyższych warunków nie został spełniony')
// }

let result = number + 2;

let numberTxt = '89';

// if (number !== numberTxt) {
//     console.log('Wartości zmiennych są NIErówne')
// }

function multiply(num1, num2) {
    let result = num1 * num2;

    return result;
}

// console.log( multiply(2, 3) );

let wynikmnozenia = multiply(number, 2);

let myheading = document.querySelector('h1');
myheading.textContent = 'Mariusz - JS - CLICK';

myheading.onclick = function() {
    alert("Czuję się kliknięty");
}

console.log(myheading);



