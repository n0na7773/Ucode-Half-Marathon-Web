function checkBrackets(str) {
    if(typeof(str) !== "string" || !/[)(]/g.test(str)) return -1;
    let left = 0;
    let right = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(') left++;
        else if (str[i] == ')')
            if (left > 0)
                left--;
            else
                right++;
    }
    
    return right + left;
}



