<?php
session_start();
include 'connection/DatabaseConnection.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Remind Password</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>

<body>
    <div class="main" >
        <form id='login_page' class="login_page" action="index.php" method="post">
            <span>Login:</span>
            <input name="login" type="text" placeholder="Type something">
            <input type="submit" name="pass_btn" value="Send password"></input>
        </form>
    </div>
    <?php
    if(isset($_POST['pass_btn'])) send_pass($_POST['login']);
    function send_pass($login) {
        $db_conn = new DatabaseConnection('127.0.0.1', NULL, 'irazumeyko', 'securepass', 'sword');
        $sql = "SELECT PASSWORD FROM users WHERE login = \"$login\"";
        $db_pass = $db_conn->conn->query($sql);
        $fetch = $db_pass->fetch(PDO::FETCH_ASSOC);
        $db_pass = $fetch['PASSWORD'];
        if(isset($_POST['pass_btn'])) {
            mail('razilur@gmail.com', 'Reminder', "Your password is ".$db_pass);
        }
    }
    ?>
</body>

</html>