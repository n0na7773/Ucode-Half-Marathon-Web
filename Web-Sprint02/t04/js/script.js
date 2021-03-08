function checkDivision(beginRange, endRange) {
    if (!beginRange) {
        beginRange = 1;
    }
    if (!endRange) {
        endRange = 100;
    }
    let res = "\n";
    for (let i = beginRange; i - 1 != endRange; i++) {
        if (i % 2 == 0) {
            res += `${i} is even`;
            if (i % 3 == 0) {
                res += `, is a multiple of 3`;
                if (i % 10 == 0) {
                    res += `, is a multiple of 10\n`;
                }
                else res += `\n`;
            }
            else if (i % 10 == 0) {
                res += `, is a multiple of 10\n`;
            }
            else res += `\n`;
        }
        else if (i % 3 == 0) {
            res += `${i} is a multiple of 3`;
            if (i % 10 == 0) {
                res += `, is a multiple of 10\n`;
            }
            else res += `\n`
        }
        else if (i % 10 == 0) {
            res += `${i} is a multiple of 10\n`;
        }
        else if (i % 2 != 0 && i % 3 != 0 && i % 10 != 0) res += `${i} -\n`;
    }
    console.log(res);
}
var num = prompt("Type the beginning and end of a range from 1 to 100 with space between. Example: 25 50.\nYou also can sent one of them empty(but leave space as divisor) or fully empty row and receive default values.");
var arr = num.split(" ");
console.log(arr[0].length);
console.log(arr[1].length);
console.log(arr[0].lenght == arr[1].lenght);
while ((!(arr[0] < arr[1]) && arr[0].lenght == arr[1].lenght)) {
    num = prompt("Type the beginning and end of a range from 1 to 100 with space between. Example: 25 50.");
    arr = num.split(" ");
}
checkDivision(arr[0], arr[1]);