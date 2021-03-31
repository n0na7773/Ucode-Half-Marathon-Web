<?php
class Ant {
    public $name, $role_in_army, $date_of_entry, $number_of_fights, $number_of_legs;
    public function __construct($name, $role_in_army, $date_of_entry, $number_of_fights, $number_of_legs) {
        $this->name = $name;
        $this->role_in_army = $role_in_army;
        $this->date_of_entry = $date_of_entry;
        $this->number_of_fights = $number_of_fights;
        $this->number_of_legs = $number_of_legs;
    }
    public function __serialize() : array {
        return [
            'name' => $this->name,
            'role_in_army' => $this->role_in_army,
            'date_of_entry' => $this->date_of_entry,
            'number_of_fights' => $this->number_of_fights,
            'number_of_legs' => $this->number_of_legs
        ];
    }
    public function __unserialize(array $data) : void {
        $this->name = $data['name'];
        $this->role_in_army = $data['role_in_army'];
        $this->date_of_entry = $data['date_of_entry'];
        $this->number_of_fights = $data['number_of_fights'];
        $this->number_of_legs = $data['number_of_legs'];
    }
    public function __wakeup() {
        error_reporting(0);
        echo "name: $this->name\nrole_in_army: $this->role_in_army\ndate_of_entry: $this->date_of_entry\nnumber_of_fights: $this->number_of_fights\nnumber_of_legs: $this->number_of_legs\n";
    }
}
/*
$ant = new Ant("Anthony", "sergeant", "2015-07-16", 1, 4);

$serialized = serialize($ant);
echo $serialized. "\n\n";

$unserialized = unserialize($serialized);
echo $unserialized;
*/
?>