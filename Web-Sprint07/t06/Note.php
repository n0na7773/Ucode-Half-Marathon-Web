<?php
class Note {
    function __construct($name, $importance, $content) {
        $this->name = $name;
        $this->importance = $importance;
        $this->content = $content;
        $this->date = date('Y-m-d H:i:s');
    }
}
?>