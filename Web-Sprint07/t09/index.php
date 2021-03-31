<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>A new set</title>
</head>

<body>
    <h1>New Avenger application</h1>
    <div style="height: 200px; border: 2px solid gray; background-color: darkgray; margin-bottom: 20px; padding: 10px 10px 10px 40px;">
        <p>POST</p>
        <?php
        $arr = [
            "name" => $_POST["name"],
            "email" => $_POST["email"],
            "age" => $_POST["age"],
            "description" => $_POST["message"],
            "photo" => $_POST["photo"]
        ];
        if($arr["name"]) {
            echo "<pre>";
            print_r ($arr);
            echo "</pre>";
        }
        ?>
    </div>
    <form action="index.php" method="post" style="border: 1px solid black; padding: 40px 20px 30px;">
        <fieldset>
            <legend>About candidate</legend>
            <label for="name">Name</label>
            <input name="name" id="name" type = "text" placeholder="Tell your name">
            <label for="email">E-mail</label>
            <input name="email" id="email" type = "text" placeholder="Tell your email">
            <label for="age">Age</label>
            <input name="age" id="age" type = "number" step = "1" min="1" max="999"><br>
            <label for="tarea">About</label>
            <textarea id = "tarea" name = "message" rows="5" cols="70" maxlength="500" placeholder="Tell about yourself, max 500 symbols"></textarea><br>
            <label for="photo">Your photo:</label>
            <input name="photo" id = "photo" type = "file">
        </fieldset>
        <input type="reset" value="Clear">
        <input type="submit" value="Send">
    </form>
</body>

</html>