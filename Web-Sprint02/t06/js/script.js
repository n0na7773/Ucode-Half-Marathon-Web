var name = prompt("Type your name first name and last name.");
var check = true;
var name_arr = name.split(" ");
for(let i = 0; i < name.length - 1; i++) {
    if (!isNaN(name_arr[0][i]) || !isNaN(name_arr[1][i])) {
        check = false;
    }
}

let full1 = (name_arr[0][0].toUpperCase() + name_arr[0].slice(1).toLowerCase()) + ' ' + (name_arr[1][0].toUpperCase() + name_arr[1].slice(1).toLowerCase());

if(check && !name_arr[2]) {
    alert(`Hello, ${full1}`);
    console.log(`Hello, ${full1}`);
}
else {
    alert("Wrong input!");
    console.log("Wrong input!");
}



