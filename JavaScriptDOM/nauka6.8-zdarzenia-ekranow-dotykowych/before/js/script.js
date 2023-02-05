console.log("Zdarzenia ekranów dotykowych");


const touchStart = (event) => {
    console.log(`touchstart()`);
}
const touchEnd = (event) => {
    console.log(`touchend()`);
}
const touchMove = (event) => {
    console.log(`touchmove()`);
}
const touchCancel = (event) => {
    // works in Chrome Browser (Device Tool) when ALT key pressed when moving OR click right mouse key when moving
    console.log(`touchcancel()`);
}


let canvas = document.getElementById("canvas");

canvas.addEventListener("touchstart", touchStart);
canvas.addEventListener("touchend", touchEnd);
canvas.addEventListener("touchmove", touchMove);
canvas.addEventListener("touchcancel", touchCancel);
