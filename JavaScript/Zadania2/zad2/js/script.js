

//FIXME: Do sprawdzenia, w koncu dziala.

// function compare(a, b) {
//     if (a < b) {
//         return -1
//     }
//     if (a > b) {
//         return 1
//     }
//     return 0
// }

// array.sort(compare);

//TODO: do wyslania, wszystko dziala jak trzeba ;)

const array = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function bubble(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubble(array));
