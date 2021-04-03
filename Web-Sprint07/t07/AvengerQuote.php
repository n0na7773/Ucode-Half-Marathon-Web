<?php
class AvengerQuote {
    private $comments = [];
    public function __construct($id, $author, $quote, $photo) {
        $this->id = $id;
        $this->author = $author;
        $this->quote = $quote;
        $this->photo = $photo;
        $this->date = date('Y-m-d');
    }
    public function addComment() {
        array_push($this->comments, new Comment($text));
    }
    public function setComments($comments) {
        $this->comments = $comments;
    }
    public function getComments() { return $this->comments; }
}
?>