<?php
class LLItem {
    public $data, $next;
    function __construct($data) {
        $this->data = $data;
        $this->next = null;
    }
}
?>