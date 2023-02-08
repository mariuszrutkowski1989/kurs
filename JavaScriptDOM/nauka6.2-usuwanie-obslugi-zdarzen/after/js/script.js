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

const cursor = document.querySelector(".neon-cursor");
const trail = document.querySelector(".neon-trail");

const colors = ["#ff0", "#0ff", "#f0f", "#0f0", "#f00"];
let colorIndex = 0;

document.addEventListener("mousemove", e => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

  trail.style.top = e.pageY + "px";
  trail.style.left = e.pageX + "px";
  trail.style.width = "10px";
  trail.style.height = "10px";
  trail.style.opacity = 1;

  setTimeout(() => {
    trail.style.width = "0";
    trail.style.height = "0";
    trail.style.opacity = 0;
  }, 300);
});

document.addEventListener("mouseenter", () => {
  cursor.style.width = "20px";
  cursor.style.height = "20px";
  cursor.style.transform = "translate(-10px, -10px)";
});

document.addEventListener("mouseleave", () => {
  cursor.style.width = "10px";
  cursor.style.height = "10px";
  cursor.style.transform = "translate(-5px, -5px)";
});

setInterval(() => {
  cursor.style.backgroundColor = colors[colorIndex];
  trail.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 500);
