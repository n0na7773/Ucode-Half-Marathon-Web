let validator = {
    get(target, prop) {
        console.log(`Trying to access the property '${prop}'...`);
        if (target.hasOwnProperty(prop)) return target[prop];
        return false;
    },
    set(target, prop, val) {
        if (prop === 'age') {
            if (isNaN(val)) throw new TypeError("The age is not an integer");
            if (!val > 0 && !val < 200) throw new RangeError("The age is invalid");
        }
        console.log(`Setting value '${val}' to '${prop}'`);
        target[prop] = val;
        return true;
    }
}

/*let person = new Proxy({}, validator);
person.age = 100;
// Setting value '100' to 'age'
console.log(person.age);
// Trying to access the property 'age'...
// 100
person.gender = "male";
// Setting value 'male' to 'gender'
person.age = 'young';
// Uncaught TypeError: The age is not an integer
person.age = 300;
// Uncaught RangeError: The age is invalid*/
