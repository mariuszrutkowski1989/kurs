console.log("Właściwości obiektu 'Event' i kontrola zdarzenia w trakcie wykonywania jego obsługi");

const sumUp = () => {
    console.log(`Summing up`);
}

let btnSumUp = document.getElementById('sum-up');

btnSumUp.addEventListener('click', sumUp);