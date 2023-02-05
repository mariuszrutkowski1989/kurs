console.log("Usuwanie obsługi zdarzeń");

const sumUp = () => {
    console.log(`Summing up`);
}

let btnSumUp = document.getElementById('sum-up');

// using HTML DOM
// btnSumUp.onclick = sumUp;

// using addEventListener - anonymous function
btnSumUp.addEventListener('click', () => {
    console.log(`Summing up - anonymous`);
});

// using addEventListener - named function
btnSumUp.addEventListener('click', sumUp);

// btnSumUp.removeAttribute('onclick'); 

// btnSumUp.onclick = null;

btnSumUp.removeEventListener('click', sumUp);

// getEventListeners - USE ONLY in Console (Dev Tools)
// https://developers.google.com/web/tools/chrome-devtools/console/utilities?&utm_source=dcc#geteventlisteners