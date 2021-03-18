function transformation() {
    if (state) {
        document.getElementById("lab").style.backgroundColor = "#70964b";
        document.getElementById("hero").innerHTML = "Hulk";
        document.getElementById("hero").style.fontSize = "130px";
        document.getElementById("hero").style.letterSpacing = "6px";
        state = 0;
    }
    else {
        document.getElementById("lab").style.backgroundColor = "#ffb300";
        document.getElementById("hero").innerHTML = "Bruce Banner";
        document.getElementById("hero").style.fontSize = "60px";
        document.getElementById("hero").style.letterSpacing = "2px";
        state = 1;
    }
}
let state = 1;