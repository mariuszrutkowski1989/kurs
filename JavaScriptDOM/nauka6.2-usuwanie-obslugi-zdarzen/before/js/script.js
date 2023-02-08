console.log(" Rejestracja i usuwanie obsługi zdarzeń");

const sumUp = () => {
    console.log('Suming Up');
}

let btnSumUp = document.getElementById('sum-up');


// TODO:
// // btnSumUp.onclick = sumUp;

// console.log(btnSumUp);

//TODO: 

btnSumUp.addEventListener('click', sumUp);

// btnSumUp.addEventListener('click', () => {console.log('sumup anonymous');});

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let currentColor = 0;

document.body.addEventListener('mouseover', function(event) {
  document.body.style.cursor = `pointer`;
  document.body.style.backgroundColor = colors[currentColor];
  currentColor = (currentColor + 1) % colors.length;
  
  const div = document.createElement(`div`);
  div.style.position = `fixed`;
  div.style.top = event.clientY + `px`;
  div.style.left = event.clientX + `px`;
  div.style.width = `5px`;
  div.style.height = `5px`;
  div.style.backgroundColor = `white`;
  div.style.pointerEvents = `none`;
  div.style.transition = `background-color 2s ease`;
  div.style.animation = `followCursor 2s ease forwards`;
  document.body.appendChild(div);
  
  setTimeout(function() {
    div.style.backgroundColor = colors[currentColor];
  }, 50);
});

const style = document.createElement(`style`);
style.innerHTML = `
  @keyframes followCursor {
    from {
      transform: translate(-50%, -50%);
    }
    to {
      transform: translate(-50%, -50%) translate(-10px, -10px);
    }
  }
`;
document.head.appendChild(style);

