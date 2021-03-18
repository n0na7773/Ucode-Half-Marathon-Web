let word_input = document.getElementById("word");
let text_input = document.getElementById("text");
let output_text = document.getElementById("output");

let phone_number = document.getElementById("phone");
let word_count = document.getElementById("count");
let word_replace = document.getElementById("replace");

let date = new Date();
date.setTime(date.getTime() + (60 * 1000));

function toPhoneNumber() {
    let phone_cnt = getCookie("phone_cnt");
    let temp = word_input.value.trim();

    if (temp.match(/^\d{10}$/g)) { 
        output_text.value = `${temp.slice(0,3)}-${temp.slice(3,6)}-${temp.slice(6,10)}`;
    }
    else { output_text.value = "Invalid phone number."; }

    document.cookie = `phone_cnt=${++phone_cnt};expires=${date.toGMTString()};path=/`;
}

function wordCount() {
    let wcount_cnt = getCookie("wcount_cnt");
    let word = word_input.value.trim();
    let text = text_input.value.trim().replace("\n", " ");
    let textArr = text.split(" ");
    let word_cnt = 0;

    if(text != "") {
        for(let i = 0; i < textArr.length; ++i) {
            if(word == textArr[i]) { word_cnt++; }
        }
    }

    output_text.value = `${word_cnt}`;

    document.cookie = `wcount_cnt=${++wcount_cnt};expires=${date.toGMTString()};path=/`;
}

function wordReplace() {
    let wreplace_cnt = getCookie("wreplace_cnt");
    let word = word_input.value.trim();
    let text = text_input.value.trim().replace("\n", " ");
    let textArr = text.split(" ");
    let count = 0;;

    let res = "";
    if(text != "") {
        for(let i = 0; i < textArr.length; ++i) {
            if(textArr[i] == "") { count--; }
            count++;
        }
        for(let i = 0; i < count; ++i) {
            res += `${word} `;
        }
    }

    output_text.value = `${res}`;
    
    document.cookie = `wreplace_cnt=${++wreplace_cnt};expires=${date.toGMTString()};path=/`;
}

function getCookie(cname) {
    var name = `${cname}=`;
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function showCookie() {
    let phoneNum = getCookie("phone_cnt");
    if(!phoneNum) { phone_number.innerHTML = 0; }
    else { phone_number.innerHTML = phoneNum; }

    let wordCountNum = getCookie("wcount_cnt");
    if(!wordCountNum) { word_count.innerHTML = 0; }
    else { word_count.innerHTML = wordCountNum; }

    let wordReplaceNum = getCookie("wreplace_cnt");
    if(!wordReplaceNum) { word_replace.innerHTML = 0; }
    else { word_replace.innerHTML = wordReplaceNum; }
}