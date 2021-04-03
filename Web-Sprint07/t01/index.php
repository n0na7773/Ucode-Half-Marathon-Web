<?php
session_start();
if(isset($_POST['forget_btn'])) session_destroy();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Session for new</title>
    <style>
        .hidden {display: none;}
        .visible {display: block;}
    </style>
</head>

<body>
    <h1>Session for new</h1>
    <fieldset style = "padding: 20px;" <?php
            if (isset($_POST['submit_btn'])) echo ' hidden'; else echo ' visible';?>>
        <form class = "form1" action="index.php" method="post"<?php
            if (isset($_POST['submit_btn'])) echo ' hidden'; else echo ' visible';?>>
            <fieldset style = "padding: 20px;">
                <legend>About the Superhero</legend>
                <label for="rname">Real Name</label>
                <input name="rname" id="rname" type = "text" placeholder="Superhero real name">
                <label for="alname">Superhero Name</label>
                <input name="alname" id="alname" type = "text" placeholder="Superhero alias">
                <label for="age">Age</label>
                <input name="age" id="age" type = "number" step = "1" min="1" max="999"><br>
                <label for="tarea">About</label>
                <textarea id = "tarea" name = "message" rows="5" cols="70" maxlength="500" placeholder="Information about the superhero, max 500 symbols"></textarea><br>
                <label for="photo">Photo:</label>
                <input name = "photo" id = "photo" type = "file">
            </fieldset>
            <fieldset style = "padding: 20px;">
                <legend>Powers</legend>
                <input type="checkbox" id="power1" name="power1" value="Telekinesis">
                <label for="power1">Telekinesis</label>
                <input type="checkbox" id="power2" name="power2" value="Super strength">
                <label for="power2">Super strength</label>
                <input type="checkbox" id="power3" name="power3" value="Shapeshifting">
                <label for="power3">Shapeshifting</label>
                <input type="checkbox" id="power4" name="power4" value="Flight">
                <label for="power4">Flight</label>
                <input type="checkbox" id="power5" name="power5" value="Elemental control">
                <label for="power5">Elemental control</label>
                <input type="checkbox" id="power6" name="power6" value="Other">
                <label for="power6">Other</label><br>
                <label for="range1">Level of control</label>
                <input type="range" id="range1" name="range1" min="0" max="10" step = "1" value = "1">
            </fieldset>
            <fieldset style = "padding: 20px;margin-bottom:10px;">
                <legend>Origin of Powers</legend>
                <input type="radio" id="unknown" name="origin" value="unknown">
                <label for="unknown">Unknown</label>
                <input type="radio" id="accident" name="origin" value="accident">
                <label for="accident">Freak lab accident</label>
                <input type="radio" id="ancient" name="origin" value="ancient">
                <label for="ancient">Chosen by ancient wise being</label>
                <input type="radio" id="nothuman" name="origin" value="nothuman">
                <label for="nothuman">The superhero is not human</label>
                <input type="radio" id="other" name="origin" value="other">
                <label for="other">Other</label>
            </fieldset>
            <input type="reset" value="Clear">
            <input type="submit" value="Send" name="submit_btn">
        </form>
    </fieldset>
    <form class = "form2" action="index.php" method="post" <?php
        if (!isset($_POST['submit_btn'])) echo ' hidden'; else echo ' visible';?>>
        <fieldset style="padding-left: 40px;">
        <?php
        if(isset($_POST['submit_btn'])) {
            $arr = [
                "name" => $_POST["rname"] ? $_POST["rname"] : "No name",
                "alias" => $_POST["alname"] ? $_POST["alname"] : "No alias",
                "age" => $_POST["age"] ? $_POST["age"] : "Unknown",
                "description" => $_POST["message"] ? $_POST["message"] : "No description",
                "strength" => $_POST["power1"] ? "+" : "-",
                "speed" => $_POST["power2"] ? "+" : "-",
                "intelligence" => $_POST["power3"] ? "+" : "-",
                "teleportation" => $_POST["power4"] ? "+" : "-",
                "immortal" => $_POST["power5"] ? "+" : "-",
                "another" => $_POST["power6"] ? "+" : "-",
                "level" => $_POST["range1"] ? $_POST["range1"] : "",
                "origin" => $_POST["origin"] ? $_POST["origin"] : "Unknown",
            ];
            $_SESSION["submitted"] = $arr;
            if($_SESSION["submitted"]) {
                foreach($_SESSION["submitted"] as $key => $value) {
                    echo $key.": ".$value."<br>";
                }
            }
        }
        ?>
        </fieldset>
        <fieldset style = "padding:20px;margin-top:10px;">
            <input type="submit" value="Forget" name="forget_btn">
        </fieldset>
    </form>
</body>

</html>