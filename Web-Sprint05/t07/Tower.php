<?php
include "Building.php";

class Tower extends Building{
    private $elevator, $arc_capacity, $height;

    public function setElevator(bool $elevator) {
        $this->elevator = $elevator;
    }
    public function hasElevator() {
        return $this->elevator;
    }
    public function setArcCapacity(int $arc_capacity) {
        $this->arc_capacity = $arc_capacity;
    }
    public function getArcCapacity() {
        return $this->arc_capacity;
    }
    public function setHeight(float $height) {
        $this->height = $height;
    }
    public function getHeight() {
        return $this->height;
    }
    public function getFloorHeight(): float {
        return $this->height / $this->getFloors();
    }
    public function toString() : string {
        $props = ["Elevator : " . (($this->elevator) ? "+" : "-"),
            "Are reactor capacity : " . $this->arc_capacity,
            "Height : " . $this->height,
            "Floor height : " . $this->getFloorHeight(),
        ];

        $str = parent::toString();

        foreach ($props as $p)
            $str = $str . $p . "\n";
        return $str;
    }
}
/*require_once(__DIR__ . "/Building.php");
require_once(__DIR__ . "/Tower.php");
$StarkTower = new Tower(93, "Different", "Manhattan, NY");
$StarkTower->setElevator(true);
$StarkTower->setArcCapacity(70);
$StarkTower->setHeight(1130);
echo $StarkTower->toString();*/
?>