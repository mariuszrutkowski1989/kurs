console.log('Skrypt dziala');

// function title(name = 'Akademia108') {
//     let sortedName = name.sort();
//     return sortedName;
// }


// ZADANIE 2

function sortString(str) {
    return str.split('').sort().join('');
  }
  
  let sortedString = sortString("Akademia108");
  console.log(sortedString);


// ZADANIE 1

function oppString(str2) {
    return str2.split('').reverse().join('');
}

let oppositeString = oppString('Akademia108');
console.log(oppositeString);

// ZADANIE 3

function calculateSumAndProduct(arr) {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      product *= arr[i];
    }
    console.log("Sum: " + sum);
    console.log("Product: " + product);
  }
  
  calculateSumAndProduct([1, 2, 3, 4, 5, 6]);