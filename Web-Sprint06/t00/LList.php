<?php
include "LLItem.php";

class a_Iterator implements Iterator {

    private $var = array();

    public function __construct($array) {
        if (is_array($array)) {
            $this->var = $array;
        }
    }

    public function rewind() {
        reset($this->var);
    }

    public function current() {
        $var = current($this->var);
        return $var;
    }

    public function key() {
        $var = key($this->var);
        return $var;
    }

    public function next() {
        $var = next($this->var);
        return $var;
    }

    public function valid() {
        $key = key($this->var);
        $var = ($key !== NULL && $key !== FALSE);
        return $var;
    }

}

class LList implements IteratorAggregate {

    private $head;
    private $count;

    function __construct() {
        $this->head = null;
        $this->count = 0;
    }
    public function getFirst() {
        if ($this->head != null) return $this->head->data;
        else echo "List is empty\n";
    }
    public function getLast() {
        if ($this->head != null) {
            $temp = new LLItem(null);
            $temp = $this->head;
            while ($temp->next != null) $temp = $temp->next;
            return $temp->data;
        }
        else echo "List is empty\n";
    }
    public function add($value) {
        $newNode = new LLItem($value);
        if($this->head == null) $this->head = $newNode;
        else {
            $temp = new LLItem(null);
            $temp = $this->head;
            while ($temp->next != null) $temp = $temp->next;
            $temp->next = $newNode;
        }   
        $this->count++;
    }
    public function addArr($array) {
        for($i = 0; $i < count($array); $i++) $this->add($array[$i]);
    }
    public function remove($value) {
        $curr = new LLItem(null);
        $prev = new LLItem(null);

        $curr = $this->head;
        $prev = $this->head;

        while($curr->data != $value) {
            if($curr->next == null) return null; 
            else {
                $prev = $curr;
                $curr = $curr->next;
            }
        }
        if($curr == $prev) {
            $this->head = $curr->next;
        }
        $prev->next = $curr->next;
        $this->count--;
    }
    public function removeAll($value) {
        $temp = new LLItem(null);
        $temp = $this->head;
        while($temp != null) {
            if($temp->data == $value) {
                $this->remove($value);
            }
            $temp = $temp->next;
        }
    }
    public function contains($value) {
        $temp = new LLItem(null);
        $temp = $this->head;

        $contains = false;
        while($temp != null) {
            if($temp->data == $value) {
                $contains = true;
                return $contains;
            }
            $temp = $temp->next;
        }
        return $contains;

    }
    public function clear() {
        $temp = new LLItem(null);
        $temp = $this->head;
        while($temp != null) {
            $this->remove($temp->data);
            $temp = $temp->next;
        }
    }
    public function count() {
        return $this->count;
    }

    public function toString() {
        $temp = new LLItem(null);
        $temp = $this->head;

        $str = "";
        if($temp != null) {
            while($temp != null) {
                if($temp->next == null) {
                    $str = $str.$temp->data;
                } else {
                    $str = $str.$temp->data.", ";
                }
                $temp = $temp->next;
            }
        } else {
            return null;
        }
        return $str;
    }

    public function getIterator() {
        $temp = new LLItem(null);
        $temp = $this->head;
        $tempArr = [];
        $i = 0;
        while($temp != null) {
            $tempArr[$i] = $temp->data;
            $i++;
            $temp = $temp->next;
        }
        $itName = new a_Iterator($tempArr);
        return $itName;
    }
}

/*
$list= new LList();
$list->addArr([100, 1, 2, 3, 100, 4, 5, 100]);

$list->removeAll(100);
$list->add(10);

echo $list->contains(10) . "\n"; // 1

echo $list->toString() . "\n"; // 1, 2, 3, 4, 5, 10

$sum= 0;
$iter = $list->getIterator();
foreach($iter as $v)
    $sum += $v;
echo"$sum\n"; // 25
$list->clear();
echo $list->toString() . "\n"; //nothing
*/
?>