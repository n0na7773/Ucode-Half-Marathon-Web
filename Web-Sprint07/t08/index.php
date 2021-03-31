<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>LilQuiz</title>
</head>

<body>
    <h1>What Thanos did for the Soul Stone?</h1>
    <form action="index.php" method="post">
        <input class="radio" type="radio" name="answer" value="1">Jumped from the mountain</input><br>
        <input class="radio" type="radio" name="answer" value="2">Made stone keeper to jump from the mountain</input><br>
        <input class="radio" type="radio" name="answer" value="3">Pushed Gamora off the mountain</input><br>
        <br>
        <input type="submit" value="I made a choice!"></input>
        <br>
    </form>
    <p>
        <?php
        $temp = $_POST["answer"];
        if (empty($temp)) echo "<p>Select something!</p>";
        else {
            if($temp != "3") echo "<p>Shame on you! Go and watch Avengers</p>";
            else echo "<p>You are a real fan of Avengers!</p>";
        }
        ?>
    </p>
</body>

</html>