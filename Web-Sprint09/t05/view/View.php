<?php
class View {
    public function __construct($url) { $this->content = file_get_contents($url); }
    public function render() { echo $this->content; }
} 
?>