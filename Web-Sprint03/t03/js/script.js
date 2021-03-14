class Human {
	constructor(firstName, lastName, gender, age, calories){
		this.firstName = firstName;
		document.getElementById("firstName").innerHTML = firstName;
		this.lastName = lastName;
		document.getElementById("lastName").innerHTML = lastName;
		this.gender = gender;
		document.getElementById("gender").innerHTML = gender;
		this.age = age;
		document.getElementById("age").innerHTML = age;
		this.calories = calories;
		document.getElementById("calories").innerHTML = calories;

		this.is_action = false;
		this.no_action = true;

		setTimeout(() => {
			if (this.no_action && this.calories < 500) document.querySelector(".content .status_bar").innerHTML = "I'm hungry";
		}, 5000);

		setInterval(() => {
			if(this.calories - 200 >= 0) {
				this.calories = +this.calories - 200;
			}
			document.getElementById("calories").innerHTML = this.calories;
		}, 60000);
	}
	sleepFor(seconds) {
		this.no_action = false;
		if(!this.is_action && seconds > 0){
			this.is_action = true;
			document.querySelector(".content .status_bar").innerHTML = "I'm sleeping";
			setTimeout(() => {
				document.querySelector(".content .status_bar").innerHTML = "I'm awake now";
				setTimeout(() => {
					document.querySelector(".content .status_bar").innerHTML = "";
				}, 2000)
				this.is_action = false;
			}, seconds * 1000);
		}
	}
	feed() {
		this.no_action = false;
		if (this.calories < 500) {
			if(!this.is_action){
				this.is_action = true;
				this.calories = +this.calories + 200;
				document.getElementById("calories").innerHTML = this.calories;
				document.querySelector(".content .status_bar").innerHTML = "Nom nom nom";
				setTimeout(() => {
					if(this.calories < 500) document.querySelector(".content .status_bar").innerHTML = "I'm still hungry";
					else document.querySelector(".content .status_bar").innerHTML = "";
					this.is_action = false;
				}, 2000);
			}
		}
		else {
			if(!this.is_action){
				document.getElementById("calories").innerHTML = this.calories;
				document.querySelector(".content .status_bar").innerHTML = "I'm not hungry";
				setTimeout(() => {
					document.querySelector(".content .status_bar").innerHTML = "";
					this.is_action = false;
				}, 1500)
			}
		}
	}
}
class Superhero extends Human{
	constructor(firstName, lastName, gender, age, calories) {
		super(firstName, lastName, gender, age, calories);
		document.querySelector(".content .hero").classList.remove("image_hidden");
		document.querySelector(".content .human").classList.add("image_hidden");
		document.querySelector(".content .actions .row1 .turn").classList.add("button_hidden");
		document.querySelector(".content .actions .row3 .fly").classList.remove("button_hidden");
		document.querySelector(".content .actions .row3 .fight").classList.remove("button_hidden");
	}
	fly() {
		if(!this.is_action){
			this.is_action = true;
			document.querySelector(".content .status_bar").innerHTML = "I'm flying!";
			setTimeout(() => {
			document.querySelector(".content .status_bar").innerHTML = "";
			this.is_action = false;
			}, 10000)
		}
	}
	fightWithEvil() {
		if(!this.is_action){
			this.is_action = true;
			document.querySelector(".content .status_bar").innerHTML = "Khhhh-chh... Bang-g-g-g... Evil is defeated!";
			setTimeout(() => {
				document.querySelector(".content .status_bar").innerHTML = "";
				this.is_action = false;
			}, 3000)
		}
	}
}
const human = new Human("Doker", "Doderovich", "super-gender", 21, 0);

document.querySelector(".content .actions .row2 .sleep").addEventListener("click", event => {
	if (human.is_action === false) human.sleepFor(prompt("Enter number of seconds to sleep"));
})
document.querySelector(".content .actions .row2 .feed").addEventListener("click", event => {
	human.feed();
})

var hero;

document.querySelector(".content .row1 .turn").addEventListener("click", event => {
	if(human.calories >= 500 && human.is_action === false) hero = new Superhero("Floppa", "Pepegovna", "super-transwoman", 13, human.calories);
	else if(human.is_action === false) document.querySelector(".content .status_bar").innerHTML = "Not enough calories!";
})
document.querySelector(".content .actions .row3 .fly").addEventListener("click", event => {
	hero.fly();
})
document.querySelector(".content .actions .row3 .fight").addEventListener("click", event => {
	hero.fightWithEvil();
})
