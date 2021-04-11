<?php
class Router {
    public function __construct() { $this->params = []; }
    public function do_the_parse($url) {
        $array = parse_url($url); 
        $array = $array['query'];
        foreach(explode('&',$array) as $val) {
            $temp_val = explode('=', $val);
            $this->params[$temp_val[0]] = $temp_val[1];
        }
    }
    public function output() {
        $res = '';
        foreach($this->params as $key => $val) { $res .= "'$key': '$val', "; }
        $res = substr(trim($res), 0, -1);
        $res = '{' . $res . '}';
        echo $res;
    }
}
?>