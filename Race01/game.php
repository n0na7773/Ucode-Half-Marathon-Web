<?php
	session_start();
	include 'connect.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Marvel Game</title>
</head>

<body>
    
    <div class="main">
        <span id="message_box"></span>
        <div class="board">
            <div class="top">
                <div class="hand" id="enemy_hand">
                </div>
                <div class="user">
                    <img src="img/enemy.png" class="avatar" alt="Avatar">
                    <span class="nickname">Evil Enemy</span>
                </div>
                <span class="hp-top" id="enemy_health"></span>
                <span class="stones-top"><span id="enemy_mana"></span>/6</span>
            </div>
            <div class="middle" id="middle">
                <div class="middle-top" id="middle-top">
                </div>
                <div class="middle-bottom" id="middle-bottom">
                </div>
            </div>
            <div class="bottom">
                <div class="hand" id="player_hand">
                </div>
                <div class="user">
                    <span class="nickname" id="my-nickname"><?php echo $_SESSION['username'];?></span></span>
                    <img src="img/player.png" class="avatar" alt="Avatar">
                </div>
                <span class="hp-bottom" id="player_health"></span>
                <span class="stones-bottom"><span id="player_mana"></span>/6</span>
            </div>
        </div>
        <div class="buttons">
            <input class="end_btn" type="button" value="End turn" id = "end_turn_btn" onclick="endTurn()"></input>
            <input class="end_btn" type="button" value="Pass" onclick="roundOver()"></input>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>