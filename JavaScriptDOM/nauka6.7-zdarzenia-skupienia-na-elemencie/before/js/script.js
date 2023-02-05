console.log("Zdarzenia skupienia na elemencie");

// functions
const focusEvent = (event) => {
    console.log(`focus() -> event.target(the trigger): ${event.target.tagName} || event.currentTarget: ${event.currentTarget.tagName} || Bubbles? ${event.bubbles}`);
    
    event.target.classList.add('focused')
}
const blurEvent = (event) => {
    console.log(`blur() -> event.target(the trigger): ${event.target.tagName} || event.currentTarget: ${event.currentTarget.tagName} || Bubbles? ${event.bubbles}`);
    
    event.target.classList.remove('focused')
}
const focusInEvent = (event) => {
    console.log(`focusin() -> event.target(the trigger): ${event.target.tagName} || event.currentTarget: ${event.currentTarget.tagName} || Bubbles? ${event.bubbles}`);
    
    event.target.classList.add('focused-bg')
    // event.stopPropagation();
}
const focusOutEvent = (event) => {
    console.log(`focusout() -> event.target(the trigger): ${event.target.tagName} || event.currentTarget: ${event.currentTarget.tagName} || Bubbles? ${event.bubbles}`);
    
    event.target.classList.remove('focused-bg')
    // event.stopPropagation();
}



// inputs
let inputs = document.querySelectorAll('input');
for (let input of inputs) {
    input.addEventListener('focus', focusEvent)
    input.addEventListener('blur', blurEvent)
    input.addEventListener('focusin', focusInEvent)
    input.addEventListener('focusout', focusOutEvent)
}



// paragraphs
let paragraphs = document.querySelectorAll('form.login p');
for (let p of paragraphs) {
    p.addEventListener('focus', focusEvent)
    p.addEventListener('blur', blurEvent)
    p.addEventListener('focusin', focusInEvent)
    p.addEventListener('focusout', focusOutEvent)
}
