function checkDivision(beginRange, endRange) {
    if (!beginRange) {
        beginRange = 1;
    }
    if (!endRange) {
        endRange = 100;
    }
    else if (beginRange > endRange) {
        alert("ERROR: Second value is greater than the first one. Program will output default values. ");
        beginRange = 1;
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
var num1 = +prompt("Type the beginning of the range. Example: 5.\nYou also can sent nothing and receive default beginning value.");
var num2 = +prompt("Type the end of the range. Example: 50.\nYou also can sent nothing and receive default end value.");

checkDivision(num1, num2);