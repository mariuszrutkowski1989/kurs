console.log('Operatory arytmetyczne');

let result = 3 + 6;
result = 7 - 3;
result = 3 * 3;
result = 12 / 2;
result = 7 % 3; // reszta z dzielenia

let i = 108;

//PRE - INKREMENTACJA - ZWIEKSZENIE O JEDEN

// console.log(++i);

// POST INKREMENTACJA

console.log(i++);
console.log(i);

// PRE DEKREMENTACJA

console.log(i--);
console.log(i);

console.log(result);

////////////////////////////////////////////////////

console.log('OPERATORY PRZYPISANIA');

let number = 108;

// console.log(number);

//operator +=

number += 2; // number = number + 2;

number -= 8; // number = number - 8;

number *= 2 // number = number * 2;

number /= 2 // number = number / 2;

number %= 50 // number = number % 50 Czyli 'Modulo' - pięćdziesiątka w 102 miesci sie dwa razy, zostawiajac 2, czyli wynik

console.log(number);

/////////////////////////////////////////////////////////////

console.log('OPERATORY PORÓWNANIA');

// == operator równości wartości

// let var1 = 108;
// let var2 = '108';
// if (var1 == var2) {
//     console.log('Warunek zostal spelniony');
// }

//OPERATOR NIEROWNOSCI WARTOSCI

// let var1 = 108;
// let var2 = '109';
// if (var1 != var2) {
//     console.log('Warunek zostal spelniony');
// }

//OPERATOR RÓWNOŚCI WARTOŚCI I TYPU DANYCH

// let var1 = 108;
// let var2 = 109;
// if (var1 === var2) {
//     console.log('Warunek zostal spelniony');
// }

// OPERATOR NIEROWNOSCI WARTOSCI LUB TYPU DANYCH

// let var1 = 108;
// let var2 = '108';
// if (var1 !== var2) {
//     console.log('Warunek zostal spelniony');
// }


//OPERATOR WIEKSZOSCI


// let var1 = 108;
// let var2 = 100;
// if (var1 > var2) {
//     console.log('Warunek zostal spelniony');
// }

//OPERATOR MNIEJSZOSC


// let var1 = 108;
// let var2 = 110;
// if (var1 < var2) {
//     console.log('Warunek zostal spelniony');
// }


// OPERATOR WIEKSZY LUB ROWNY / MNIEJSZY LUB ROWNY WG TEJ SAMEJ REGULY


let var1 = 108;
let var2 = 108;
if (var1 >= var2) {
    console.log('Warunek zostal spelniony');
}

//////////////////////////////////////////////////////////////////////////////////////

//OPERATORY LOGICZNE

console.log('Operatory logiczne');


//  && Operator negacji (not)
console.log(!(2>1));

// && OPERATOR ILOCZYNU LOGICZNEGO (and) // aby iloczyn logiczny byl spelniony, oba warunki musza dawac true
console.log((2>1) && (30>10)); //true
console.log((2>1) && (9>10)); //false
console.log((0>1) && (3>10)); //false

// || Operator sumy logicznej (or)
console.log( (0>1) || (2>10)); // 2x false = false
console.log( (2>1) || (2>10)); // 1 true 1 false = true
console.log( (2>1) || (12>10)); // 2x true = true


//////////////////////////////////////////////////////////////////////////////////////////////

// OPERATOR WARUNKOWY

