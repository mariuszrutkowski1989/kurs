console.log("Zdarzenia formularzy");

let formLogin = document.querySelector('form.login');

const submitForm = (event) => {
    event.preventDefault(); //blokada wywolania akcji
    console.log(`submit() - blocked by event.preventDefault()`);
}

const resetForm = (event) => {
    console.log(`reset()`);
}

formLogin.addEventListener('submit', submitForm);
formLogin.addEventListener('reset', resetForm);

