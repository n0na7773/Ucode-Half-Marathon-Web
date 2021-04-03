<?php
session_start();
function autoload($pClassName) {
    include(__DIR__. '/' . $pClassName. '.php');
}
spl_autoload_register("autoload");
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Notepad mini</title>
    <style>
        .form {display: flex; flex-flow: column;} 
        .input {padding: 5px;}
    </style>
</head>

<body>
    <h1>Notepad mini</h1>
    <form method="post" class="form">
        <div class="input" >
            <input name="note_name" placeholder="Name">
        </div>
        <div class="input" >
            <select class="input" name="importance[]">
                <option selected>low</option>
                <option>medium</option>
                <option>high</option>
            </select>
        </div>
        <div class="input" >
            <textarea class="input" name="content" placeholder="Text of note ..."></textarea>
        </div>
        <div class="input" >
            <input type="submit" name="create_note" value="Create" >
        </div>
    </form>
    <h2>List of notes</h2>
    <?php
    $fileName = "NotePad";
    if(isset($_POST['note_name']) && isset($_POST['content']) && isset($_POST['create_note'])) {
        $newNote = new Note($_POST['note_name'], $_POST['importance'], $_POST['content']);
        if(!file_exists($fileName)) {
            fclose(fopen($fileName, 'c'));
            $notePad = new NotePad();
        }
        else {
            $fileR = file_get_contents($fileName);
            $notePad = unserialize($fileR);
            $notePad->unserializeArray();
        }
        $notePad->addNote($newNote);
        $notePad->addSerializedNote($newNote);
        $notePad->notes = NULL;
        file_put_contents ($fileName, serialize($notePad));
        $notePad->unserializeArray();
    }

    if(file_exists($fileName)) {
        $fileR = file_get_contents($fileName);
        $notePad = unserialize($fileR);
        $notePad->unserializeArray();
        if(isset($notePad->notes)) {
            echo '<ul>';
            foreach($notePad->notes as $v) {
                echo '<li><a href="?noteContent='.$v->name.'">'.$v->date.' > '.$v->name.'</a><span> </span>';
                echo '<a href="?deleteNote='.$v->name.'">DELETE</a></li>';  
            }
            echo '</ul>';
        }
    }
    ?>

    <h2>Detail of&nbsp;<?php
            if(isset($_GET['noteContent'])) echo $_GET['noteContent'];
            else echo "";
        ?>
    </h2>
    <?php
    if(isset($_GET['noteContent'])) {
        if(file_exists($fileName)) {
            $fileR = file_get_contents($fileName);
            $notePad = unserialize($fileR);
            $notePad->unserializeArray();
            echo "<ul>";
            foreach($notePad->notes as $v) {
                if($v->name == $_GET['noteContent']) {
                    echo "<li>date: <b>$v->date</b></li>";
                    echo "<li>name: <b>$v->name</b></li>";
                    echo "<li>importance: <b>".$v->importance[0]."</b></li>";
                    echo "<li>content: <b>$v->content</b></li>";
                }
            }
            echo "</ul>";
        }
    }
    if(isset($_GET['deleteNote'])) {
        if(file_exists($fileName)) {
            $fileR = file_get_contents($fileName);
            $notePad = unserialize($fileR);
            $notePad->unserializeArray();
            fclose(fopen ($fileName, "w+"));
            $notePad->deleteElement($_GET['deleteNote']);
            $notePad->notes = NULL;
            file_put_contents ($fileName, serialize($notePad));
            echo '<script>window.location = window.location.href.split("?")[0];</script>';
        }
    }
    ?>
</body>

</html>