<?php
class DatabaseConnection {
    public function __construct($host, $port, $username, $password, $database) {
        $this->conn = new PDO("mysql:host=$host;dbname=$database", $username, $password);
    }
    public function __destruct() { $this->conn = null; }
    public function getConnectionStatus() {
        if (isset($this->conn)) return true;
        else return false;
    }
}
/*$dbh = new DatabaseConnection('127.0.0.1', NULL, 'irazumeyko', 'securepass', 'ucode_web');
echo $dbh->getConnectionStatus();*/
?>