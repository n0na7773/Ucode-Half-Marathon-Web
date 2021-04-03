<?php
session_start();
if(isset($_POST['save_button'])) header('Refresh:0');
if(isset($_POST['clear_button'])) header('Refresh:0');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Hack it!</title>
    <style>
        .hidden {display: none;}
        .visible {display: block;}
    </style>
</head>

<body>
    <h1>Password</h1>
    <?php
        if(isset($_POST['check_btn']) && isset($_POST['check_pass'])) {
            if(password_verify($_POST['check_pass'], $_SESSION['hashed_pass'])) {
                echo '<span style="color: green;">Hacked!</span><br><br>';
                unset($_SESSION['hashed_pass']);
                session_destroy();
            } 
            else echo '<span style="color: red;">Access denied!</span><br><br>';
        }
    ?>
    <?php
        if(isset($_POST['save_btn']) && isset($_POST['pass']) && isset($_POST['salt'])) {
            $_SESSION['hashed_pass'] = crypt($_POST['pass'], $_POST['salt']);
        }
        if(isset($_POST['clear_btn'])) {
            unset($_SESSION['hashed_pass']);
            session_destroy(); 
        }
    ?>
    <form action="index.php" method="post" <?php if(isset($_SESSION['hashed_pass'])) {echo ' hidden';} else {echo ' display';} ?>>
        <span>Password not saved at session.</span><br>
        <span>Password for saving to session</span><input name="pass" required placeholder="Password to session"><br>
        <span>Salt for saving to session</span><input name="salt" required placeholder="Salt to session"><br>
        <input type="submit" name="save_btn" value="Save">
    </form>
    <form action="index.php" method="post" <?php if(!isset($_SESSION['hashed_pass'])) {echo ' hidden';} else {echo ' display';} ?>>
        <span>Password saved at session.</span><br>
        <span>Hash is&nbsp;<?php echo $_SESSION['hashed_pass']?></span><br> 
        <span>Try to guess:</span><input name="check_pass" placeholder="Password to session">
        <input type="submit" name="check_btn" value="Check password"><br>
        <input type="submit" name="clear_btn" value="Clear">
    </form>
</body>

</html>