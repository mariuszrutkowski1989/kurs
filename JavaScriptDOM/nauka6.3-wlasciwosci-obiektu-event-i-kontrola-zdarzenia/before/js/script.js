console.log("Właściwości obiektu 'Event' i kontrola zdarzenia w trakcie wykonywania jego obsługi");

const sumUp = (event) => {
    // console.log(event);
    console.log(`Target: ${event.target.outerHTML}`);
    console.log(`${event.type}`);
}

let btnSumUp = document.getElementById('sum-up');

btnSumUp.addEventListener('click', sumUp);

btnSumUp.addEventListener('dblclick', sumUp);

//TODO:// event.preventDefault()

let a108 = document.getElementById('akademia108');
a108.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(`Default action stopped`);
});

// Obsluga buttonow edit

for (let btn of document.querySelectorAll('button.edit')) {
    btn.addEventListener('click', (event) => {
        event.stopPropagation();
        alert('Edit user');
    })


    btn.closest('div.row').addEventListener('click', (event) => {
        alert ('About user')
})
}