<?php
if (!isset($_COOKIE["times"])) $value = 1;
else $value = $_COOKIE["times"] + 1;

setcookie("times", $value, time()+60);
$_COOKIE["times"] = $value;  
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Counter</title>
</head>

<body>
    <h1>Cookie counter</h1>
    <br>
    <?php
    echo "<p>This page was loaded ".htmlspecialchars($_COOKIE["times"])." time(s) in last minute</p>";
    ?>
</body>

</html>