console.log("Zdarzenia myszy");

let list = document.getElementById('list');

const mouseEvent = (e) => {
    console.log(`Event: ${e.type}, 
currentTarget: <${e.currentTarget.tagName.toLowerCase()} class="${e.currentTarget.className}"></${e.currentTarget.tagName.toLowerCase()}>, 
target: <${e.target.tagName.toLowerCase()} class="${e.target.className}"></${e.target.tagName.toLowerCase()}>`);
}

for (let listItem of list.children) {
    
    // listItem.firstElementChild.innerText - zawiera w HTML tekst z nazwą zdarzenia, pod które podpinam funkcję

    listItem.addEventListener(listItem.firstElementChild.innerText, mouseEvent);
}