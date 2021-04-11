<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Simple router</title>
</head>

<body>
    <?php
    include 'Router.php';
    $router = new Router();
    $router->do_the_parse("http://localhost:3000/t03/index.php/?data=somedata&filter=somefilter");
    $router->output();
    ?>
</body>

</html>