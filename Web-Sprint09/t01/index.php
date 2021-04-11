<?php
session_start();
include 'connection/DatabaseConnection.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>

<body>
    <div class="main" >
        <form id='login_page' class="login_page" action="index.php" method="post">
            <span>Login:</span>
            <input name="login" type="text" placeholder="Type something">
            <span>Password:</span>
            <input id="password" name="password" type="password" placeholder="Type something">
            <span id="error"></span>
            <input type="submit" name="login_btn" value="Log in"></input>
        </form>
        <form id='logout_page' class="logout_page hidden" action="index.php" method="post">
            <span class="status">Status: <span id="status" class="admin"></span></span>
            <input type="submit" name="logout_btn" value="Log out"></input>
        </form>
    </div>
    <?php
    if(isset($_POST['login_btn'])) {
        if(is_correct_input($_POST['login'], $_POST['password'])) {
            echo '<script> login(); </script>';
            if($_SESSION['status'] == 'admin') {
                echo '<script> statusAdmin(); </script>';
            } else if($_SESSION['status'] == 'user') {
                echo '<script> statusUser(); </script>';
            }
        } else {
            echo '<script> error(); </script>';
        }
    }
    if(isset($_POST['logout_btn'])) { echo '<script> logout(); </script>'; }
    function is_correct_input($login, $password) {
        $db_conn = new DatabaseConnection('127.0.0.1', NULL, 'irazumeyko', 'securepass', 'sword');
        $sql = "SELECT PASSWORD, STATUS FROM users WHERE login = \"$login\"";
        $db_pass = $db_conn->conn->query($sql);
        $fetch = $db_pass->fetch(PDO::FETCH_ASSOC);
        $db_pass = $fetch['PASSWORD'];
        $_SESSION['status'] = $fetch['STATUS'];
        if($db_pass != $password) return false;
        else return true;
    }
    ?>
</body>
</html>