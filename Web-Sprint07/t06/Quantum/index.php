<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Quantum space</title>
</head>

<body>
    <?php
    function calculate_time() : array {
        $past = new DateTime("1939-01-01");
        $current = new DateTime("now");
        $days = $past->diff($current)->format("%a") / 7;
        $y = floor($days / 365);
        $w = floor(($days % 365) / 30);
        $d = floor(($days % 365) % 30);
        return [$y, $w, $d];
    } 
    $time = calculate_time();
    echo "<p>\nIn quantum space you were absent for ". $time[0] . " years, ".$time[1] . " months, ". $time[2] . " days!\n</p>";
    ?>
</body>

</html>