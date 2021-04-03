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
    <title>Files</title>
</head>

<body>
    <h1>Files</h1>
    <form method="post">
        <span>File name:</span><input name="file_name">
        <span>Content:</span><textarea name="content"></textarea>
        <input type="submit" name="create_file" value="Create file">
        <?php
        if(isset($_POST['create_file']) && isset($_POST['file_name'])) {
            $file = new File("tmp/" . $_POST['file_name']);
            $file->write($_POST['content']);
        }
        ?>
    </form>
    <form method="post">
        <h2>List of files:</h2>
        <?php
        $_SESSION['files'] = new FilesList("tmp");
        echo $_SESSION['files']->toList();
        ?>
        <h2>Selected file:
        <?php
            if(isset($_GET['file'])) echo "tmp/".$_GET['file'];
            else echo "";
        ?>
        </h2>
        <input type="submit" name="delete_file" value="Delete file">
        <?php
        if(isset($_POST['delete_file']) && isset($_GET['file'])) {
            unlink("tmp/" . $_GET['file']);
            unset($_POST["delete_file-file"]);
            unset($_GET['file']);
            echo '<script>window.location = window.location.href.split("?")[0];</script>';
        }
        if(isset($_GET['file'])) {
            $file_out = new File("tmp/" . $_GET['file']);
            echo "<br>" . $file_out->toList();
        }
        ?>
    </form>
</body>

</html>