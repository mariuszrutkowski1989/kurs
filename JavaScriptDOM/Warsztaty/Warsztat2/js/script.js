console.log('Dziala?');

let form = document.getElementById('form');

const submitForm = (event) => {
    event.preventDefault();

    let firstName = document.querySelector('[name="fname"]')
    let lastName = document.querySelector('[name="lname"]')

    console.log(`Imie: ${firstName.value}, Nazwisko: ${lastName.value}`);
}



form.addEventListener('submit', submitForm);

console.log(form);