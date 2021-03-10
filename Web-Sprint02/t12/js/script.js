function concat(str1, str2) {
    function func1() {
        func1.count++;
        let str2 = prompt("Enter second string, please.");
        return str1 + ' ' + str2;
    }
    func1.count = 0;
    if (!str2) return func1;
    return str1 + ' ' + str2;
}
