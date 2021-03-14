String.prototype.removeDuplicates = function() {
    var result = "";
    var newrow = false;
    for (var i = 0; i < this.length; i++) {
        if (this[i] === "\n") {
            result += this[i];
            newrow = true;
        }
        else if (!(newrow == true && this[i] == " ") && !(this[i - 1] == " " && this[i] == " " && newrow == false)){
            newrow = false;
            if (!(this[i + 1] === "\n" && this[i] == " ")){
                result += this[i];
            }
        }
    }
    var str = result.split(" ");
    result = [];
    for(var i =0; i < str.length ; i++){
        if(result.indexOf(str[i]) === -1) result.push(str[i]);
    }
    return result.join(" ");
};

/*let str = "Giant Spiders?   What’s next? Giant Snakes?";
console.log(str);
// Giant Spiders?   What’s next? Giant Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str = ". . . . ? . . . . . . . . . . . ";
console.log(str);
// . . . . ? . . . . . . . . . . .
str = str.removeDuplicates();
console.log(str);
// . ?*/
