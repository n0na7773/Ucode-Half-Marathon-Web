<?php
class NotePad {
    public $notes = [];
    public $serializeNotes = [];
    function __construct() {
        $this->notes = [];
        $this->serializeNotes = [];
    }
    function addNote($note) {
        if($this->notes) {
            array_push($this->notes, $note);
        } else {
            $this->notes = [$note];
        }
    }
    function deleteElement($name) {
        $index = array_search($name, $this->notes);
        array_splice($this->notes, $index, 1);
        $this->rewriteSerializedNote();
    }
    private function rewriteSerializedNote() {
        unset($this->serializeNotes);
        foreach($this->notes as $note) {
            $this->addSerializedNote($note);
        }
    }
    function addSerializedNote($note) {
        if($this->serializeNotes) {
            array_push($this->serializeNotes, serialize($note));
        }
        else {
            $this->serializeNotes = [serialize($note)];
        }
    }
    function unserializeArray() {
        foreach($this->serializeNotes as $note) {
            $this->addNote(unserialize($note));
        }
    }
}
?>