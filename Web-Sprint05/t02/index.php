<?php
function checkDivision($a = 1, $b = 60) {
    for ($i = $a; $i - 1 < $b; $i++) {
        $res = "The number " . $i;
        if ($i % 2 == 0) {
            $res = $res . " is divisible by 2";
            if ($i % 3 == 0) {
                $res = $res . ", is divisible by 3";
                if ($i % 10 == 0) {
                    $res = $res . ", is divisible by 10\n";
                }
                else $res = $res . "\n";
            }
            else if ($i % 10 == 0) {
                $res = $res . ", is divisible by 10\n";
            }
            else $res = $res . "\n";
        }
        else if ($i % 3 == 0) {
            $res = $res. " is divisible by 3";
            if ($i % 10 == 0) {
                $res = $res . ", is divisible by 10\n";
            }
            else $res = $res . "\n";
        }
        else if ($i % 10 == 0) {
            $res = $res . "is divisible by 10\n";
        }
        else if ($i % 2 != 0 && $i % 3 != 0 && $i % 10 != 0) $res = $res . " -\n";
        echo $res;
    }
}
/*echo "*** Range is 3 - 7 checkDivision(3,7) ***\n";
checkDivision(3,7);
echo "\n*** Range is 58 - ... checkDivision(58) ***\n";
checkDivision(58);
echo "\n*** Range is ... - ... checkDivision() ***\n";
checkDivision();*/
?>