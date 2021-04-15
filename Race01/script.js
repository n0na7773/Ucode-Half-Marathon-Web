function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function start() {
    var i = 5;
    var timer = setInterval( function() {
    var player_hand = document.getElementById('player_hand');
    addCard(player_hand);
    var enemy_hand = document.getElementById('enemy_hand');
    addCard(enemy_hand);
    --i;
    if (i <= 0) clearInterval(timer);
}, 500);
    var player_mana_html = document.getElementById('player_mana');
    var enemy_mana_html = document.getElementById('enemy_mana');
    player_mana_html.innerHTML = max_mana;
    enemy_mana_html.innerHTML = max_mana;
}
function endTurn() {
    var cards = document.getElementById('middle').getElementsByClassName('card');
    for (var i = cards.length - 1; i >= 0; --i) {
        cards[i].remove();
    }
    var player_hand = document.getElementById('player_hand');
    addCard(player_hand);
    var enemy_hand = document.getElementById('enemy_hand');
    addCard(enemy_hand);
    if (max_mana < 6) max_mana++;
    player_mana = max_mana;
    enemy_mana = max_mana;
    var player_mana_html = document.getElementById('player_mana');
    var enemy_mana_html = document.getElementById('enemy_mana');
    player_mana_html.innerHTML = player_mana;
    enemy_mana_html.innerHTML = enemy_mana;
}
function addCard(hand){
    var new_card = document.createElement("div");
    new_card.classList = "card";
    new_card.setAttribute("name", "12");
    new_card.setAttribute("onclick", "putCard(this)");
    var card_index = getRandomInt(3);
    new_card.style.backgroundImage = `url("${deck[card_index]["img"]}")`;
    new_card.dataset.cost = deck[card_index]["cost"];
    new_card.dataset.hp = deck[card_index]["hp"];
    new_card.dataset.dmg = deck[card_index]["dmg"];
    hand.appendChild(new_card);
}
function putCard(elem) {
    board = document.getElementById('middle-bottom');
    if(elem.dataset.cost <= player_mana) { player_mana -= elem.dataset.cost;
    var player_mana_html = document.getElementById('player_mana');
    player_mana_html.innerHTML = player_mana;
    board.appendChild(elem);}
}
var deck = [
    {
        "name": "captain",
        "hp": "10",
        "dmg": "10",
        "cost": "2",
        "img": "cards/1.png"
    },
    {
        "name": "gambit",
        "hp": "5",
        "dmg": "5",
        "cost": "1",
        "img": "cards/4.png"
    },
    {
        "name": "dr_strange",
        "hp": "15",
        "dmg": "15",
        "cost": "3",
        "img": "cards/9.png"
    }
];
var max_mana = 1;
var player_mana = 1;
var enemy_mana = 1;
start();