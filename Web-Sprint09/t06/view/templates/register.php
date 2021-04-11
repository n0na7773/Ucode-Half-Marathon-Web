<?php
$_SESSION['error_user_exist'] = '';
if(isset($_POST['create_btn'])) {
    save_user($_POST['login'], $_POST['password'], $_POST['name'], $_POST['email']);
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
        <form class="register_page" action="index.php" method="post">
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

