let guestList = new WeakSet();

let name1 = { name: "Ilya" };
let name2 = { name: "Anton" };
let name3 = { name: "Sanya" };
let name4 = { name: "Vitalik" };
let name5 = { name: "Andrey" };

guestList.add(name1, "Ilya");
guestList.add(name2, "Anton");
guestList.add(name3, "Sanya");
guestList.add(name4, "Vitalik");
guestList.add(name5, "Andrey");

console.log(`Is allowed ${name1.name}: ${guestList.has(name1)}`);
console.log(`Is allowed ${name2.name}: ${guestList.has(name1)}`);

console.log(`Guest ${name2.name} deleted`);
guestList.delete(name2);

console.log(`Is allowed ${name1.name}: ${guestList.has(name1)}`);
console.log(`Is allowed ${name2.name}: ${guestList.has(name2)}`);

let menu = new Map();

menu.set('noodles', 79);
menu.set('shawarma', 89);
menu.set('pizza', 129);
menu.set('salad', 89);
menu.set('burger', 69);

console.log(`Amount of dishes: ${menu.size}`);
for(let entry of menu) { 
    console.log(entry); 
}

let bankVault = new WeakMap();

let box1 = { id: 1, name: 'Ilya', money: 2500}
let box2 = { id: 2, name: 'Anton', money: 2000}
let box3 = { id: 3, name: 'Sanya', money: 3000}
let box4 = { id: 4, name: 'Vitalik', money: 6000}
let box5 = { id: 5, name: 'Andrey', money: 5000}

bankVault.set(box1, 12111);
bankVault.set(box2, 35222);
bankVault.set(box3, 40333);
bankVault.set(box4, 42444);
bankVault.set(box5, 22555);

console.log(`Credentials ${bankVault.get(box1)}: money - ${box1.money}`);
console.log(`Credentials ${bankVault.get(box2)}: money - ${box2.money}`);
console.log(`Credentials ${bankVault.get(box3)}: money - ${box3.money}`);
console.log(`Credentials ${bankVault.get(box4)}: money - ${box4.money}`);
console.log(`Credentials ${bankVault.get(box5)}: money - ${box5.money}`);

let coinCollection = new Set();

coinCollection.add("BTC");
coinCollection.add("ETH");
coinCollection.add("RVN");
coinCollection.add("ZEC");
coinCollection.add("XRP");

console.log(`My coins: `);
console.log(coinCollection);