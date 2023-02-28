

let screen = document.getElementById('result');

function addToScreen(value) {
    screen.innerHTML += value;
}

function calculate() {
    screen.innerHTML = eval(screen.innerHTML);
}

function calculate() {
    try {
        screen.innerHTML = eval(screen.innerHTML);
    } catch (e) {
        screen.innerHTML = "Error";
    }
}


function clearScreen() {
    screen.innerHTML = '';
}

