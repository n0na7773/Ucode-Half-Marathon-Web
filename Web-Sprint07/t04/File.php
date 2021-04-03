<?php
class File {
    function __construct($file_name) {
        $this->file_name = $file_name;
        if(!file_exists("tmp")) mkdir("tmp");
        if(!file_exists($this->file_name )) {
            $this->file = fopen($this->file_name, "c");
            fclose($this->file);
        }
    }
    function write($content) {
        if(file_exists($this->file_name)) file_put_contents($this->file_name, $content, FILE_APPEND);
    }
    function toList() {
        if(file_exists($this->file_name)) return file_get_contents($this->file_name);
    }
}
?>