<?php
session_start();
include 'connection/DatabaseConnection.php';
$_SESSION['error_user_exist'] = '';
if(isset($_POST['create_btn'])) {
    save_user($_POST['login'], $_POST['password'], $_POST['name'], $_POST['email']);
}
function save_user($login, $password, $name, $email) {
    $db_conn = new DatabaseConnection('127.0.0.1', NULL, 'irazumeyko', 'securepass', 'sword');
    $sql = "INSERT INTO `users` (`LOGIN`, `PASSWORD`, `NAME`, `EMAIL`) 
            VALUES (\"$login\", \"$password\", \"$name\", \"$email\")";
    if(!$db_conn->conn->query($sql)) $_SESSION['error_user_exist'] = 'Error! That User exist!';
    else $_SESSION['user_added'] = 'Welcome, new User!';
    session_destroy();
}
?>

<!DOCTYPE html>
<html lang="en">

<head onload=<?php unset($_SESSION['error_user_exist']); unset($_SESSION['error_user_exist']);?>>
    <meta charset="utf-8">
    <title>Registration</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>

<body>
    <div class="main" >
        <form class="form" action="index.php" method="post">
            <span>Login:</span>
            <input name="login" type="text" placeholder="Type something">
            <span>Password:</span>
            <input id="password" name="password" type="password" placeholder="Type something">
            <span>Confirm password:</span>
            <input id="repeat_password" name="repeat_password" type="password" placeholder="Type something" required onchange="is_correct()">
            <span>Full name:</span>
            <input name="name" type="text" placeholder="Type something">
            <span>Email address:</span>
            <input name="email" type="email" placeholder="Type something">
            
            <span id="error_password"></span>
            <span id="error_user_exist"><?php echo $_SESSION['error_user_exist']; ?></span>
            <span id="user_added"><?php echo $_SESSION['user_added']; ?></span>

            <input type="submit" name="create_btn" value="Create User"></input>
        </form>
    </div>
</body>

</html>

