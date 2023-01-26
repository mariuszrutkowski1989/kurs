console.log('Instrukcje warunkowe');

/* 

if (warunek1) {

    ...instrukcje JavaScript, gdy spełniony 'warunek1'  

} else if (warunek2) {

    ...instrukcje JavaScript, gdy spełniony 'warunek2'

} else if (warunek3) {

    ...instrukcje JavaScript, gdy spełniony 'warunek3'

} else {

    ...instrukcje JavaScript w każdym innym przypadku niż powyższe

}

 */

let cenaPizzy = 43;

if (cenaPizzy < 20) {
    console.log('pizza jest tania');
} else if ((cenaPizzy >= 20) && (cenaPizzy < 25)) {
    console.log('pizza jest w dobrej cenie');
} else if ((cenaPizzy >= 25) && (cenaPizzy < 30)) {
    console.log('pizza jest droga');
} else {
    console.log('pizza nie istnieje');
}

console.log("Instrukcja warunkowa - switch case");

/* 

switch (wyrazenie) {

  case wartosc1:
    ...instrukcje JavaScript, gdy wyrażenie ma 'wartosc1'
    [break;]

  case wartosc2:
    ...instrukcje JavaScript, gdy wyrażenie ma 'wartosc2'
    [break;]

  ...
  ...
  ...

  case wartoscN:
    ...instrukcje JavaScript, gdy wyrażenie ma 'wartoscN'
    [break;]
    
  [default:
    ...instrukcje JavaScript, gdy żadne z powyższych wartości nie pasuje do wyrażenia
    [break;]]
}

 */

let city = 'warszawa';

switch (city) {
    case 'szczecin':
        console.log('wybrano szczecin');
        break;
    case 'warszawa':
        console.log('wybrano warszawe');
        // break;
    case 'katowice':
        console.log('wybrano katowice');
        break;

    default:
        console.log('Nie wybrano miasta');
        break;
}