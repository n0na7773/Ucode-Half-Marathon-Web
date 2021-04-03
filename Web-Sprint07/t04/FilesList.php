<?php
class FilesList {
    function __construct($path) {
        $this->files = [];
        if(file_exists($path)) {
            $this->files = array_diff(scandir($path), array('.', '..'));
        }
    }
    function toList() {
        $res = '<ul>';
        foreach($this->files as $temp) $res .= '<li><a href="?file='.$temp. '">'.$temp.'</a></li>';
        $res .= '</ul>';
        return $res;
    }
} 
?>