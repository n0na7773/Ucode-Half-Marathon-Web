<?php
namespace Space\Quantum;
use \DateTime;
function calculate_time() : array {
    $past = new DateTime("1939-01-01");
    $current = new DateTime("now");
    $days = $past->diff($current)->format("%a") / 7;
    $y = floor($days / 365);
    $w = floor(($days % 365) / 30);
    $d = floor(($days % 365) % 30);
    return [$y, $w, $d];
} 
?>