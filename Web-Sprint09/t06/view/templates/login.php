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
            <input type="submit" name="remind_pass_btn" value="Remind password"></input>
            <input type="submit" name="goto_register_btn" value="Register"></input>
        </form>
    </div>
</body>
</html>