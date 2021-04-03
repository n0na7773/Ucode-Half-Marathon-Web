<?php
session_start();
if(isset($_POST['clear_btn'])) session_destroy();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Charset</title>
</head>

<body>
    <h1>Charset</h1>
    <form action="index.php" method="post">
        <span>Change charset:</span><input name="string" placeholder="Input string"><br><br>
        <span>Select charset or several charsets:</span>
        <select multiple name="charset[]">
            <option>UTF-8</option>
            <option>ISO-8859-1</option>
            <option>Windows-1252</option>
        </select>
        <input type="submit" name="change_btn" value="Change charset" >
        <input type="submit" name="clear_btn"  value="Clear">
    </form><br>
    <?php
    if(isset($_POST['change_btn']) && isset($_POST['string'])) {
        $_SESSION['string'] = $_POST['string'];
        echo 'Input string:';
        echo '<textarea>';
        echo $_SESSION['string'];
        echo '</textarea><br>';
        utf8_encode($_SESSION['string']);
        if ($_POST['charset'][0]) {
            echo $_POST['charset'][0];
            echo '<textarea>';
            echo $_SESSION['string'];
            echo '</textarea><br>'; 
        }
        if ($_POST['charset'][1]) {
            echo $_POST['charset'][1];
            echo '<textarea>';
            echo iconv('UTF-8', 'ISO-8859-1//TRANSLIT', $_SESSION['string']);
            echo '</textarea><br>'; 
        }
        if ($_POST['charset'][2]) {
            echo $_POST['charset'][2];
            echo '<textarea>';
            echo iconv('UTF-8', 'Windows-1252', $_SESSION['string']);
            echo '</textarea><br>'; 
        }
    }
    ?>
</body>
</html>