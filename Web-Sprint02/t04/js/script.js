function checkDivision(beginRange, endRange) {
    let res = "\n";
    for (let i = beginRange; i <= endRange; i++) {
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
var num = prompt("Type the beginning and end of a range from 1 to 100 with space between. Example: 25 50.");
var arr = num.split(" ");
while (((!(arr[0] > 0) || !(arr[0] <= 100)) || (!(arr[1] > 0) || !(arr[1] <= 100))) || !(arr[0] < arr[1])) {
    num = prompt("Type the beginning and end of a range from 1 to 100 with space between. Example: 25 50.");
    arr = num.split(" ");
}
checkDivision(arr[0], arr[1]);

