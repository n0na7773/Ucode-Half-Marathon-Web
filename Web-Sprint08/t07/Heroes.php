<?php
include 'Model.php';

class Heroes extends Model {
    public $name, $description, $class_role, $race, $id;
    public function __construct() { parent::__construct('heroes'); }
    public function get_index_arr($sql) {
        return $this->db_conn->conn->query($sql)->fetch(PDO::FETCH_ASSOC);
    }
    public function find($id) {
        if ($this->db_conn->getConnectionStatus()) {
            $sql = 'SELECT * FROM '.$this->table.' WHERE ID = '.$id;
            $index_arr = $this->get_index_arr($sql);
            if (isset($index_arr)) {
                $this->name = $index_arr['NAME'];
                $this->description = $index_arr['DESCRIPTION'];
                $this->class_role = $index_arr['CLASS_ROLE']; 
                $this->race = $index_arr['RACE'];
                $this->id = $index_arr['ID'];
                print $index_arr['NAME'] . "\t";
                print $index_arr['DESCRIPTION'] . "\t";
                print $index_arr['CLASS_ROLE'] . "\t";
                print $index_arr['RACE'] . "\t";
                print $index_arr['ID'] . "\n";
            }
        }
    }
    public function delete() {
        if ($this->db_conn->getConnectionStatus()) {
            $sql = 'SELECT ID FROM '.$this->table.' WHERE ID = '.$this->id;
            $index_arr = $this->get_index_arr($sql);
            if ($index_arr['ID']) {
                $sql = 'DELETE FROM '.$this->table.' WHERE ID = '.$this->id;
                $deletion = $this->db_conn->conn->exec($sql);
                $this->id = null;
                $this->name = null;
                $this->description = null;
                $this->race = null;
                $this->class_role = null;
            }
        }
    }
    public function save() {
        if ($this->db_conn->getConnectionStatus()) {
            $sql = 'SELECT ID, NAME FROM '.$this->table.' WHERE ID = '.$this->id;
            $index_arr = $this->get_index_arr($sql);
            if (!$index_arr['ID']) {
                $sql = "INSERT INTO heroes (ID, NAME, DESCRIPTION, RACE, CLASS_ROLE) 
                        VALUES ('$this->id', '$this->name', '$this->description', '$this->race', '$this->class_role')";
                $saving = $this->db_conn->conn->exec($sql);
            } else {
                $sql = "UPDATE heroes 
                            SET ID = $this->id, 
                                NAME = '$this->name', 
                                DESCRIPTION = '$this->description', 
                                RACE = '$this->race', 
                                CLASS_ROLE = '$this->class_role '
                        WHERE ID = $this->id";
                $saving = $this->db_conn->conn->exec($sql);
            }
        }
    }
}

/*$test = new Heroes();
$test->find(1);
$test->find(2);
$test->find(3);
$test->id = 1;
$test->delete(1);
$test->id = 1;
$test->name = "Isaac";
$test->description = "Crybaby";
$test->race = "entity";
$test->class_role = "dps";
$test->save();
$test->find(1);
$test->find(2);
$test->find(3);
$test->id = 9;
$test->name = "Lost";
$test->description = "???";
$test->save();
$test->find(9);*/
?>