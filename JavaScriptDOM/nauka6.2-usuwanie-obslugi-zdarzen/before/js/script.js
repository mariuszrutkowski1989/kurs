console.log("Usuwanie obsługi zdarzeń");

const sumUp = () => {
    console.log(`Summing up`);
}

let btnSumUp = document.getElementById('sum-up');

// using HTML DOM
// btnSumUp.onclick = sumUp;

// using addEventListener - anonymous function
// btnSumUp.addEventListener('click', () => {
//     console.log(`Summing up - anonymous`);
// });

// using addEventListener - named function
btnSumUp.addEventListener('click', sumUp);