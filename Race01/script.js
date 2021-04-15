let my_nickname_html = document.getElementById('my-nickname');
my_nickname_html = window.localStorage.getItem('user');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function start() {
    var i = 3;
    var timer = setInterval(function () {
        var player_hand = document.getElementById('player_hand');
        addPlayerCard(player_hand);
        var enemy_hand = document.getElementById('enemy_hand');
        addEnemyCard(enemy_hand);
        --i;
        if (i <= 0) clearInterval(timer);
    }, 500);
    var player_mana_html = document.getElementById('player_mana');
    var enemy_mana_html = document.getElementById('enemy_mana');
    player_mana_html.innerHTML = max_mana;
    enemy_mana_html.innerHTML = max_mana;
}

function endTurn() {
    var btn_html = document.getElementById('end_turn_btn');
    btn_html.setAttribute("value", "End turn");
    var enemy_cards = document.getElementById('enemy_hand').getElementsByClassName('card');
    var player_cards = document.getElementById('player_hand').getElementsByClassName('card');
    if(enemy_cards.length < 1 && player_cards.length < 1) {
        roundOver();
        return;
    }
    var player_hand = document.getElementById('player_hand');
    addPlayerCard(player_hand);
    var enemy_hand = document.getElementById('enemy_hand');
    addEnemyCard(enemy_hand);
    if (max_mana < 6) max_mana++;
    player_mana = max_mana;
    enemy_mana = max_mana;
    var player_mana_html = document.getElementById('player_mana');
    var enemy_mana_html = document.getElementById('enemy_mana');
    player_mana_html.innerHTML = player_mana;
    enemy_mana_html.innerHTML = enemy_mana;
    enemyTurn();
}
function roundOver() {
    var enemy_cards = document.getElementById('enemy_hand').getElementsByClassName('card');
    var timer = setInterval(function () {
        enemyTurn();
        if (enemy_cards.length < 1) clearInterval(timer);
    }, 750);
    var enemy_hp = 0;
    var enemy_dmg = 0;
    var player_hp = 0;
    var player_dmg = 0;
    var brd_enemy_cards = document.getElementById('middle-top').getElementsByClassName('card');
    for (var i = brd_enemy_cards.length - 1; i >= 0; --i) {
        enemy_hp += +brd_enemy_cards[i].dataset.hp;
        enemy_dmg += +brd_enemy_cards[i].dataset.dmg;
    }
    var brd_player_cards = document.getElementById('middle-bottom').getElementsByClassName('card');
    for (var i = brd_player_cards.length - 1; i >= 0; --i) {
        player_hp += +brd_player_cards[i].dataset.hp;
        player_dmg += +brd_player_cards[i].dataset.dmg;
    }
    var brd_cards = document.getElementById('middle').getElementsByClassName('card');
    for (var i = brd_cards.length - 1; i >= 0; --i) {
        brd_cards[i].remove();
    }
    var message_box = document.getElementById('message_box');
    message_box.innerHTML = `Enemy total power: ${(enemy_hp + enemy_dmg)}.\nYour total power: ${(player_hp + player_dmg)}.`;
    if ((enemy_hp + enemy_dmg) > (player_hp + player_dmg)) {
        message_box.innerHTML += ` You lose!`;
        player_health -= 5;
        var player_health_html = document.getElementById('player_health');
        player_health_html.innerHTML = player_health;
    }
    else if ((enemy_hp + enemy_dmg) < (player_hp + player_dmg)){
        message_box.innerHTML += ` You win!`;
        enemy_health -= 5;
        var enemy_health_html = document.getElementById('enemy_health');
        enemy_health_html.innerHTML = enemy_health;
    }
    else message_box.innerHTML += ` Draw!`;
    setTimeout(function () {
        if (enemy_health < 1) {
            message_box.innerHTML = `Congratulations!`;
            player_health = 20;
            enemy_health = 20;
            var player_health_html = document.getElementById('player_health');
            var enemy_health_html = document.getElementById('enemy_health');
            player_health_html.innerHTML = player_health;
            enemy_health_html.innerHTML = enemy_health;
            var btn_html = document.getElementById('end_turn_btn');
            btn_html.setAttribute("value", "Restart");
        }
        else if (player_health < 1) {
            message_box.innerHTML = `My opologies...`;
            player_health = 20;
            enemy_health = 20;
            var player_health_html = document.getElementById('player_health');
            var enemy_health_html = document.getElementById('enemy_health');
            player_health_html.innerHTML = player_health;
            enemy_health_html.innerHTML = enemy_health;
            var btn_html = document.getElementById('end_turn_btn');
            btn_html.setAttribute("value", "Restart");
        }
        else {
            message_box.innerHTML = ``;
            init();
        }
    }, 2000);
    
}
function enemyTurn() {
    board = document.getElementById('middle-top');
    var cards = document.getElementById('enemy_hand').getElementsByClassName('card');
    for (var i = cards.length - 1; i >= 0; --i) {
        if (cards[i].dataset.cost <= enemy_mana) {
            enemy_mana -= cards[i].dataset.cost;
            var enemy_mana_html = document.getElementById('enemy_mana');
            enemy_mana_html.innerHTML = enemy_mana;
            cards[i].style.backgroundImage = `url("${deck[cards[i].dataset.ind]["img"]}")`;
            board.appendChild(cards[i]);
        }
    }
}

function addPlayerCard(hand) {
    var new_card = document.createElement("div");
    new_card.classList = "card";
    new_card.setAttribute("name", "12");
    new_card.setAttribute("onclick", "putCard(this)");
    var card_index = getRandomInt(20);
    new_card.style.backgroundImage = `url("${deck[card_index]["img"]}")`;
    new_card.dataset.cost = deck[card_index]["cost"];
    new_card.dataset.hp = deck[card_index]["hp"];
    new_card.dataset.dmg = deck[card_index]["dmg"];
    new_card.dataset.ind = deck[card_index]["ind"];
    hand.appendChild(new_card);
}
function addEnemyCard(hand) {
    var new_card = document.createElement("div");
    new_card.classList = "card";
    new_card.setAttribute("name", "12");
    new_card.setAttribute("onclick", "putCard(this)");
    var card_index = getRandomInt(20);
    new_card.style.backgroundImage = `url("cards/card_back.png");`;
    new_card.dataset.cost = deck[card_index]["cost"];
    new_card.dataset.hp = deck[card_index]["hp"];
    new_card.dataset.dmg = deck[card_index]["dmg"];
    new_card.dataset.ind = deck[card_index]["ind"];
    hand.appendChild(new_card);
}

function putCard(elem) {
    board = document.getElementById('middle-bottom');
    if (elem.dataset.cost <= player_mana) {
        player_mana -= elem.dataset.cost;
        var player_mana_html = document.getElementById('player_mana');
        player_mana_html.innerHTML = player_mana;
        board.appendChild(elem);
    }
}
function init(){
    max_mana = 1;
    player_mana = 1;
    enemy_mana = 1;
    setTimeout(function () {
        var message_box = document.getElementById('message_box');
        message_box.innerHTML = ``;
        start();
    }, 1000);
}
var deck = [{
        "name": "spider_man",
        "hp": 3,
        "dmg": 5,
        "cost": 3,
        "ind": "0",
        "img": "cards/1.png"
    },
    {
        "name": "quasar",
        "hp": 1,
        "dmg": 4,
        "cost": 3,
        "ind": "1",
        "img": "cards/2.png"
    },
    {
        "name": "sleepwalker",
        "hp": 1,
        "dmg": 4,
        "cost": 3,
        "ind": "2",
        "img": "cards/3.png"
    },
    {
        "name": "gambit",
        "hp": 2,
        "dmg": 1,
        "cost": 1,
        "ind": "3",
        "img": "cards/4.png"
    },
    {
        "name": "cannonball",
        "hp": 2,
        "dmg": 1,
        "cost": 1,
        "ind": "4",
        "img": "cards/5.png"
    },
    {
        "name": "beast",
        "hp": 2,
        "dmg": 1,
        "cost": 1,
        "ind": "5",
        "img": "cards/6.png"
    },
    {
        "name": "quicksilver",
        "hp": 2,
        "dmg": 1,
        "cost": 1,
        "ind": "6",
        "img": "cards/7.png"
    },
    {
        "name": "weaponomega",
        "hp": 2,
        "dmg": 1,
        "cost": 1,
        "ind": "7",
        "img": "cards/8.png"
    },
    {
        "name": "dr_strange",
        "hp": 3,
        "dmg": 3,
        "cost": 3,
        "ind": "8",
        "img": "cards/9.png"
    },
    {
        "name": "domino",
        "hp": 2,
        "dmg": 2,
        "cost": 3,
        "ind": "9",
        "img": "cards/10.png"
    },
    {
        "name": "daredevil",
        "hp": 1,
        "dmg": 4,
        "cost": 3,
        "ind": "10",
        "img": "cards/11.png"
    },
    {
        "name": "morbius",
        "hp": 3,
        "dmg": 3,
        "cost": 2,
        "ind": "11",
        "img": "cards/12.png"
    },
    {
        "name": "nightaglawler",
        "hp": 3,
        "dmg": 1,
        "cost": 2,
        "ind": "12",
        "img": "cards/13.png"
    },
    {
        "name": "blackpanther",
        "hp": 3,
        "dmg": 1,
        "cost": 2,
        "ind": "13",
        "img": "cards/14.png"
    },
    {
        "name": "antman",
        "hp": 3,
        "dmg": 1,
        "cost": 2,
        "ind": "14",
        "img": "cards/15.png"
    },
    {
        "name": "ghostrider",
        "hp": 3,
        "dmg": 1,
        "cost": 1,
        "ind": "15",
        "img": "cards/16.png"
    },
    {
        "name": "darkhawk",
        "hp": 3,
        "dmg": 1,
        "cost": 1,
        "ind": "16",
        "img": "cards/17.png"
    },
    {
        "name": "iceman",
        "hp": 2,
        "dmg": 2,
        "cost": 1,
        "ind": "17",
        "img": "cards/18.png"
    },
    {
        "name": "mefisto",
        "hp": 2,
        "dmg": 2,
        "cost": 1,
        "ind": "18",
        "img": "cards/19.png"
    },
    {
        "name": "madthinker",
        "hp": 3,
        "dmg": 1,
        "cost": 1,
        "ind": "19",
        "img": "cards/20.png"
    }
];
var max_mana = 1;
var player_mana = 1;
var enemy_mana = 1;
var player_health = 20;
var enemy_health = 20;
var player_health_html = document.getElementById('player_health');
var enemy_health_html = document.getElementById('enemy_health');
player_health_html.innerHTML = player_health;
enemy_health_html.innerHTML = enemy_health;
init();