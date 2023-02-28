console.log('Ło Panie, kto to Panu tak...');

let newsletterForm = document.getElementById('newsletter');
let agreeAllChx = document.getElementById('agree-all');

const validate = (event) => {

    let txtname = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (txtname.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imie i nazwisko';

        errors.appendChild(liError);
        alert('IMIE DAWAJ!');
        // console.log(liError);
    }

    if (txtEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail';

        errors.appendChild(liError);
        alert('DAWAJ MAILA!');
    }

    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres musi zawierać znak "@"';

        errors.appendChild(liError);
        // alert('MAŁPĘ POSTAW W MAILU!');
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Zaznacz pierwszą zgodę';

        errors.appendChild(liError);
        // alert('DAWAJ MAILA!');
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }

    

    // console.log(`validate()`);
    // console.log(errors);
}

const agreeAll = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');
    let agree3 = document.getElementById('agree-all');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;
    // agree3.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;

    console.log(event.target.checked);
}

newsletterForm.addEventListener('submit', validate);

newsletterForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    document.body.classList.add("submitting");
    
    form.classList.add("submitted");
  });

agreeAllChx.addEventListener('change', agreeAll)


// console.log(newsletterForm);
// console.log(agreeAllChx);


