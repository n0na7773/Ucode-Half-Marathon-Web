<?php
function save_user($login, $password, $name, $email) {
    $db_conn = new DatabaseConnection('127.0.0.1', NULL, 'irazumeyko', 'securepass', 'sword');
    $sql = "INSERT INTO `users` (`LOGIN`, `PASSWORD`, `NAME`, `EMAIL`) 
            VALUES (\"$login\", \"$password\", \"$name\", \"$email\")";
    if(!$db_conn->conn->query($sql)) $_SESSION['error_user_exist'] = 'Error! That User exist!';
    else $_SESSION['user_added'] = 'Welcome, new User!';
    session_destroy();
}
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