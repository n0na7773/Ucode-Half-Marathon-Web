<?php
class Avenger {
    public $name, $alias, $gender, $age, $power = array(), $hp;
    public function __construct($name, $alias, $gender, $age, $power, $hp) {
        $this->name = $name;
        $this->alias = $alias;
        $this->gender = $gender;
        $this->age = $age;
        $this->power = $power;
        $this->hp = $hp;
    }
}
class Team {
    public $id, $avengers = array();
    public function __construct($id, $avengers) {
        $this->id = $id;
        $this->avengers = $avengers;
    }
    public function battle($damage) : void {
        $amount = count($this->avengers);
        $k = 0;
        for($i = 0; $i < $amount; $i++) $this->avengers[$i]->hp -= $damage;
        for($i = 0; $i < $amount; $i++) {
            if($this->avengers[$k]->hp <= 0) {         
                array_splice($this->avengers, $k, 1);
            } else $k++;
        }
    }
    public function calculate_losses($cloned_team) : void {
        $died = count($cloned_team->avengers) - count($this->avengers);
        if($died == 0) echo "We haven't lost anyone in this battle!\n";
        else echo "In this battle we lost ".$died." Avenger(s).\n";
    }
}
/*
$arr = array();

$arr[0] = new Avenger("Tony Stark", "Iron Man", "man", 38,["intelligence", "durability", "magnetism"], 120);
$arr[1] = new Avenger("Natasha Romanoff", "Black Widow", "woman", 35,["agility", "martial arts"], 75);
$arr[2] = new Avenger("Carol Danvers", "Captain Marvel", "woman", 27,["durability", "flight", "interstellar travel"], 95);

$team = new Team(1, $arr);

echo"Battle 1\n";
$cloned_team = clone $team;
$damage = 25;
$team->battle($damage);
$team->calculate_losses($cloned_team);

echo"\nBattle 2\n";
$cloned_team = clone $team;
$damage = 80;
$team->battle($damage);
$team->calculate_losses($cloned_team);
*/
?>