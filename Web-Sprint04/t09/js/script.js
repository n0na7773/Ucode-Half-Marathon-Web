let text_input = document.getElementById("text");

function addToStorage() {
    let date = new Date();
    date.getTime();
    let _year = date.getFullYear();
    let _month = date.getMonth();
    let _date = date.getDate();
    let _hours = date.getHours();
    let _minutes = date.getMinutes();
    let _seconds = date.getSeconds();

    if(_month.length < 2) { _month = `0${_month}`; }
    if(_date.length < 2) { _date = `0${_date}`; }

    let corr_date = `${_date}.${_month}.${_year} ${_hours}:${_minutes}:${_seconds}`;

    let i = 0;
    while(localStorage.getItem(`user_input_${i}`)) { i++; }

    if(text_input.value != "") { 
        localStorage.setItem(`user_input_${i}`, `--> ${text_input.value} [${corr_date}]`);
        document.getElementById("history").innerHTML += localStorage.getItem(`user_input_${i}`) + '<br>';
    }
}

function clearStorage() {
    localStorage.clear();
    loadStorage();
}

function loadStorage() {
    i = 0;
    if(!localStorage.getItem(`user_input_${i}`)) {
        document.getElementById("history").innerHTML = '';
    } else {
        while(localStorage.getItem(`user_input_${i}`)) {
            document.getElementById("history").innerHTML += localStorage.getItem(`user_input_${i}`) + '<br>';
            i++;
        }
    }
}