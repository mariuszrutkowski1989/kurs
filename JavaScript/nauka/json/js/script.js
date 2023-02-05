console.log('JSON');

//najczesciej uzywany do przekazywania i odbierania danych. Przyklad ponizej, robimy liste pracownikow:

let listaPracownikow = {
    "employees": [
        { "firstName": "Hans", "lastName": "Schmidt" },
        { "firstName": "Jan", "lastName": "Nowak" },
        { "firstName": "Marek", "lastName": "Kowalski" }
    ]
};

console.log(listaPracownikow.employees);

for (let pracownik of listaPracownikow.employees) {
    console.log(pracownik);
    // console.log(pracownik.lastName);
}

// console.log(JSON.stringify(listaPracownikow)); // zamiana na stringa

// console.log(JSON.parse(listaPracownikow)); // zamiana na js