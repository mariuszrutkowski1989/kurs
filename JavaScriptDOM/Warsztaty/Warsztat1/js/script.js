console.log('Dziala?');

let clickCount = 0;

const setBackground = () => {
    console.log('click');

    clickCount++; //inkrementacja za kazdym wywolaniem funkcji, za kazdym kliknieciem

    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');

    if (clickCount === 1) {
        p1.classList.add('bg-red');
    } else if (clickCount === 2) {
        p2.classList.add('bg-green');
    } else if (clickCount === 3) {
        p1.classList.replace('bg-red', 'bg-green');
    } else if (clickCount === 4) {
        p2.classList.replace('bg-green', 'bg-red');
    } else {
        p1.classList.remove('bg-green');
        p2.classList.remove('bg-red');
        clickCount = 0;
    }

    //przy kazdej 5 bez koloru.
    // p1.classList.add('bg-red');
    // p2.classList.add('bg-green');

    /*     p1.style.backgroundColor = 'red';
        p2.style.backgroundColor = 'green'; //to nam daje style inline - tego nie chcemy */
}

let change = document.getElementById('back');
let p1 = document.querySelector('.first')
let p2 = document.querySelector('.last')

// console.log(p2);



change.addEventListener('click', setBackground);

// DZIALA


