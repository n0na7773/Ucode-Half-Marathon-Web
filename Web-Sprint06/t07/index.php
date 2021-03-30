<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>SERVER</title>
</head>

<body>
    <?php
    echo $_SERVER["PHP_SELF"]." <br>";          
    echo $_SERVER["argv"]." <br>";              
    echo $_SERVER["SERVER_ADDR"]." <br>";       
    echo $_SERVER["HTTP_HOST"]." <br>";         
    echo $_SERVER["SERVER_PROTOCOL"]." <br>";   
    echo $_SERVER["QUERY_STRING"]." <br>";      
    echo $_SERVER["HTTP_USER_AGENT"]." <br>";   
    echo $_SERVER["REMOTE_ADDR"]." <br>";       
    echo $_SERVER["REQUEST_URI"]." <br>";       
    ?>
</body>

</html>