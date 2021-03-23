<?php
class StrFrequency {
    protected $str;

    public function __construct(string $string) {
        $this->str = $string;
    }
    public function letterFrequencies() {
        $res = array();
        foreach (count_chars(strtoupper($this->str), 1) as $i => $val) {
            if (ctype_alpha($i)) $res[strtoupper(chr($i))] = $val;
        }
        return $res;
    }
    public function wordFrequencies() {
        $str = preg_replace("/[^a-z\d ]/i", '', $this->str);
        return array_count_values(str_word_count(strtoupper($str), 1));
    }
    public function reverseString() {
        $str = preg_replace("/[^a-z ]/i", ' ', $this->str);
        return strrev($str);
    }
}

/*function test($string)
{
    $obj = new StrFrequency($string);
    $symbol = $obj->letterFrequencies();
    echo "Letters in " . $string . "\n";
    foreach ($symbol as $k => $v) {
        echo "Letter ". $k . " is repeated " . $v . " times\n";
    }
    $symbol = $obj->wordFrequencies();
    echo "Words in " . $string . "\n";
    foreach ($symbol as $k => $v) {
        echo "Word ". $k . " is repeated " . $v . " times\n";
    }
    echo "Reverse the string: " . $string . "\n";
    echo $obj->reverseString() . "\n";
}
test("Face it, Harley-- you and your Puddin' are kaput!");
echo "*************\n";
test("  Test test 123 45 !0 f   HeLlO wOrLd  ");
echo "*************\n";
test("");*/
?>