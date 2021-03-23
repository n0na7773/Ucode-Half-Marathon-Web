<?php

class Overload {
    private $data = array();
    public function __set($name, $value) {
        $this->data[$name] = $value;
    }

    public function __get($name) {
        if (array_key_exists($name, $this->data)) {
            return $this->data[$name];
        }
        else return "NO DATA";
    }

    public function __isset($name) {
        if (array_key_exists($name, $this->data)) return isset($this->data[$name]);
        else return $this->data[$name] = "NOT SET";
    }

    public function __unset($name) {
        $this->data[$name] = NULL;
    }
}
/*require_once(__DIR__ . "/Overload.php");
$overload = new Overload();
$overload->mark_LXXXV = "INACTIVE";
echo $overload->mark_LXXXV;
echo "\n" . $overload->mark_LXXXVI;
if (isset($overload->mark_LXXXVI))
    echo "\n" . $overload->mark_LXXXVI;
unset($overload->mark_IV);
if ($overload->mark_IV == NULL)
echo "\nNULL\n";*/
?>