/*let head = ["Name", "Strength", "Age"];
let heroes = [
    { name: `Black Panther`, strength: 66, age: 53 },
    { name: `Captain America`, strength: 79, age: 137 },
    { name: `Captain Marvel`, strength: 97, age: 26 },
    { name: `Hulk`, strength: 80, age: 49 },
    { name: `Iron Man`, strength: 88, age: 48 },
    { name: `Spider-Man`, strength: 78, age: 16 },
    { name: `Thanos`, strength: 99, age: 1000 },
    { name: `Thor`, strength: 95, age: 1000 },
    { name: `Yon-Rogg`, strength: 73, age: 52 }
]
let sorting = {
    byName: false,
    byStrength: false,
    byAge: false
}
let notification = document.querySelector('#notification')
notification.innerHTML = "Sorting by Name, order: ASC"

function createTable(heroesArr) {
    let placeholder = document.getElementById("placeholder");
    let tbl = document.createElement("table");

    tbl.appendChild(createHeader());
    for (let i = 0; i < 9; i++) {
        let row = document.createElement("tr");
        insertCell(`${heroesArr[i].name}`, row);
        insertCell(`${heroesArr[i].strength}`, row);
        insertCell(`${heroesArr[i].age}`, row);
        tbl.appendChild(row);
    }
    placeholder.innerHTML="";
    placeholder.appendChild(tbl);
}

function insertCell(str, row) {
    let cell = document.createElement("td");

    cell.innerText = str;
    row.appendChild(cell);
}

function createHeader() {
    let row = document.createElement("tr");

    for (let i = 0; i < 3; i++) {
        let cell = document.createElement("th");

        cell.innerText = head[i];
        if (i === 0)
            cell.setAttribute("onclick", "byName()");
        else if (i === 1) {
            cell.setAttribute("onclick", "byStrength()");
        }
        else {
            cell.setAttribute("onclick", "byAge()");
        }
        row.appendChild(cell);
    }
    return row;
}

function byName() {
    if (sorting.byName === false) {
        heroes.sort((a, b) => a.name > b.name ? 1 : -1);
        sorting.byName = true;
        sorting.byStrength = false;
        sorting.byAge = false;
        notification.innerHTML = "Sorting by Name, order: ASC"
    }
    else {
        heroes.sort((a, b) => a.name < b.name ? 1 : -1);
        sorting.byName = false;
        sorting.byStrength = false;
        sorting.byAge = false;
        notification.innerHTML = "Sorting by Name, order: DESC"
    }
    createTable(heroes);
}

function byStrength() {
    if (sorting.byStrength === false) {
        heroes.sort((a, b) => a.strength > b.strength ? 1 : -1);
        sorting.byName = false;
        sorting.byStrength = true;
        sorting.byAge = false;
        notification.innerHTML = "Sorting by Strength, order: ASC"
    }
    else {
        heroes.sort((a, b) => a.strength < b.strength ? 1 : -1);
        sorting.byName = false;
        sorting.byStrength = false;
        sorting.byAge = false;
        notification.innerHTML = "Sorting by Strength, order: DESC"
    }
    createTable(heroes)
}

function byAge() {
    if (sorting.byAge === false) {
        heroes.sort((a, b) => a.age > b.age ? 1 : -1);
        sorting.byName = false;
        sorting.byStrength = false;
        sorting.byAge = true;
        notification.innerHTML = "Sorting by Age, order: ASC"
    }
    else {
        heroes.sort((a, b) => a.age < b.age ? 1 : -1);
        sorting.byName = false;
        sorting.byStrength = false;
        sorting.byAge = false;
        notification.innerHTML = "Sorting by Age, order: DESC"
    }
    createTable(heroes)
}

createTable(heroes);*/
let rows = [
    { name: `Black Panther`, strength: 66, age: 53 },
    { name: `Captain America`, strength: 79, age: 137 },
    { name: `Captain Marvel`, strength: 97, age: 26 },
    { name: `Hulk`, strength: 80, age: 49 },
    { name: `Iron Man`, strength: 88, age: 48 },
    { name: `Spider-Man`, strength: 78, age: 16 },
    { name: `Thanos`, strength: 99, age: 1000 },
    { name: `Thor`, strength: 95, age: 1000 },
    { name: `Yon-Rogg`, strength: 73, age: 52 }
]

function tableCreate(){
    let placeholder = document.getElementById("placeholder");  
    var tbl  = document.createElement('table');
    tbl.style.width  = '300px';
    tbl.style.border = '1px solid black';

    var tr = document.createElement("tr");
    insertSortBtn(`Name`, 0, tr);
    insertSortBtn(`Strength`, 1, tr);
    insertSortBtn(`Age`, 2, tr);
    tbl.appendChild(tr);

    for(var i = 0; i < 9; i++){
        var tr = document.createElement("tr");
        insertInRow(rows[i].name, tr);
        insertInRow(rows[i].strength, tr);
        insertInRow(rows[i].age, tr);
        tbl.appendChild(tr);
    }
    tbl.style.border = '3px solid #000000';
    placeholder.innerHTML="";
    placeholder.appendChild(tbl);
}
function insertInRow(cell, row) {
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(cell));
    row.appendChild(td);
}
function insertSortBtn(cell, id, row) {
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(cell));
    switch (id) {
        case 0: td.setAttribute("onclick", "sortByName()"); break;
        case 1: td.setAttribute("onclick", "sortByStrength()"); break;
        case 2: td.setAttribute("onclick", "sortByAge()"); break;
    }
    td.className = "header";
    row.appendChild(td);
}
var status = 1;
function sortByName() {
    if (status == 0) {
        rows.sort((a, b) => a.name > b.name ? 1 : -1);
        status = 1;
        notification.innerHTML = "Sorting by Name, order: ASC"
    }
    else {
        rows.sort((a, b) => a.name < b.name ? 1 : -1);
        status = 0;
        notification.innerHTML = "Sorting by Name, order: DESC"
    }
    tableCreate();
}
function sortByStrength() {
    if (status == 0) {
        rows.sort((a, b) => a.strength > b.strength ? 1 : -1);
        status = 1;
        notification.innerHTML = "Sorting by Strength, order: ASC"
    }
    else {
        rows.sort((a, b) => a.strength < b.strength ? 1 : -1);
        status = 0;
        notification.innerHTML = "Sorting by Strength, order: DESC"
    }
    tableCreate();
}
function sortByAge() {
    if (status == 0) {
        rows.sort((a, b) => a.age > b.age ? 1 : -1);
        status = 1;
        notification.innerHTML = "Sorting by Age, order: ASC"
    }
    else {
        rows.sort((a, b) => a.age < b.age ? 1 : -1);
        status = 0;
        notification.innerHTML = "Sorting by Age, order: DESC"
    }
    tableCreate();
}
tableCreate();