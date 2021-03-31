<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Normal space</title>
</head>

<body>
    <?php
    function calculate_time() {
        $past = new DateTime("1939-01-01");
        $current = new DateTime("now");
        return $past->diff($current);
    }
    $time = calculate_time();
    echo "<p>In real life you were absent for ". $time->format("%Y") . " years, ".$time->format("%m") . " months, ". $time->format("%d") . " days!\n</p>";
    ?>
</body>

</html>