<?php
class Ingestion {
    public $id = 0, $meal_type = array("breakfast", "lunch", "dinner"), $day_of_diet, $products = array();
    public function __construct($meal_type, $id) {
        if(!in_array($meal_type, $this->meal_type)) {
            echo "Wrong input!";
            exit(0);
        }
        $this->id = $id;
    }
    public function get_from_fridge($product) : void {
        if($this->products[$product]->getKcal() > 200) throw new EatException("No more junk food, dumpling");
    }
    public function setProduct($product) { $this->products[$product->getName()] = $product; }
    public function getProducts() { return $this->products; }
}
/*
require_once("EatException.php");
require_once("Product.php");

$namesProducts = ['Nutella','Chicken','Coca-Cola','Biscuit','Brocolli','Tomatoes','Apple','Potato','Pizza','Beer'];

$stock = new Ingestion('breakfast', 1);

foreach($namesProducts as $name) {
    $stock->setProduct(new Product($name, rand(40, 500)));
}

$allProducts = $stock->getProducts();
foreach($namesProducts as $product) {
    $count = rand(1, 5);
    try {
        echo "***\nGetting ". $allProducts[$product]->getName() . " that has ";
        echo $allProducts[$product]->getKcal() . " calories.\n";
        $stock->get_from_fridge($product);
        echo"You're doing great, ". $product. " is good!\n";
    } catch (EatException $e) {
        echo "Caught exception: ". $e->getMessage() . "! ";
        echo "Throw ". $product. " away!\n";
    }
}
*/
?>