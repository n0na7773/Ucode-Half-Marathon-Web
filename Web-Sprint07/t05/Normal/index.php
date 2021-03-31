<?php
namespace Space\Normal;
use \DateTime;
function calculate_time() {
    $past = new DateTime("1939-01-01");
    $current = new DateTime("now");
    return $past->diff($current);
}
?>