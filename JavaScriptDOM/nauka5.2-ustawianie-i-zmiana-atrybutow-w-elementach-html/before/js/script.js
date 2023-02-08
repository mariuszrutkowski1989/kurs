console.log("Ustawianie i zmiana atrybutów elementów HTML");

let list = document.getElementById('list')


list.setAttribute('role', 'list')

for (let listItem of list.children) {
    listItem.setAttribute('role', 'listItem')
}

console.log(list);

console.log(list.getAttribute('id'));