var animal = prompt("What animal is the superhero most similar to?");
if (/^[A-Z]{1,20}$/i.test(animal) == false) {
    throw new Error('This is not an error. This is just to abort javascript');
}

var gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
if (/^male$/i.test(gender) == false && /^female$/i.test(gender) == false && /^$/i.test(gender) == false) {
    throw new Error('This is not an error. This is just to abort javascript');
}

var age = prompt("How old is the superhero?");
if (/^[0-9]{1,5}$/i.test(age) == false) {
    throw new Error('This is not an error. This is just to abort javascript');
}

var desc;
if (gender == "male" && age < 18) {
    desc = "boy";  
}
if (gender == "male" && age >= 18) {
    desc = "man";  
}
if (gender == "female" && age < 18) {
    desc = "girl"; 
}
if (gender == "female" && age >= 18) {
    desc = "woman";  
}
if (gender == "" && age < 18) {
    desc = "kid"; 
}
if (gender == "" && age >= 18) {
    desc = "hero";
}
alert(`The superhero name is: ${animal}-${desc}`); 