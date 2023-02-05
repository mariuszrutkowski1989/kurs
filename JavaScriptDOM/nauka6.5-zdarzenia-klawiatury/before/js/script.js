console.log("Zdarzenia klawiatury");

let inputSearch = document.getElementById('search');

const keyDown = (event) => {
    console.log(`keyDown():`);
    console.log(`---------`);
    console.log(`event.shiftKey: ${event.shiftKey}`);
    console.log(`event.altKey: ${event.altKey}`);
    console.log(`event.ctrlKey: ${event.ctrlKey}`);
    console.log(`event.metaKey: ${event.metaKey}`); // On Macintosh keyboards, this is the ⌘ Command key. On Windows keyboards, this is the Windows key (⊞ Windows).
    console.log(`event.key: ${event.key}`);
}

const keyPress = (event) => {
    console.log(`keyPress()`);
    console.log(`---------`);
    console.log(`event.shiftKey: ${event.shiftKey}`);
    console.log(`event.altKey: ${event.altKey}`);
    console.log(`event.ctrlKey: ${event.ctrlKey}`);
    console.log(`event.metaKey: ${event.metaKey}`); // On Macintosh keyboards, this is the ⌘ Command key. On Windows keyboards, this is the Windows key (⊞ Windows).
    console.log(`event.key: ${event.key}`);
}

const keyUp = (event) => {
    console.log(`keyUp()`);
    console.log(`---------`);
    console.log(`event.shiftKey: ${event.shiftKey}`);
    console.log(`event.altKey: ${event.altKey}`);
    console.log(`event.ctrlKey: ${event.ctrlKey}`);
    console.log(`event.metaKey: ${event.metaKey}`); // On Macintosh keyboards, this is the ⌘ Command key. On Windows keyboards, this is the Windows key (⊞ Windows).
    console.log(`event.key: ${event.key}`);
}

inputSearch.addEventListener('keydown', keyDown);
inputSearch.addEventListener('keypress', keyPress);
inputSearch.addEventListener('keyup', keyUp);