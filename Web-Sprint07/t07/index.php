<?php
function autoload($pClassName) { 
    include(__DIR__. '/' . $pClassName. '.php'); 
}
spl_autoload_register("autoload");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Data to XML</title>
    <style>
        .main {
            display: flex;
        }
        .inner {
            border: 1px double black;
            padding: 15px;
        }
    </style>
</head>

<body>
    <h1>Avenger Quote to XML</h1>
    <?php
    $avengerQuote1 = new AvengerQuote(228, "vasya", "shkila", [ "poc.jpg", "poc2.jpg" ]);
    $avengerQuote1->addComment("LOL");
    $avengerQuote1->addComment("kek");
    $avengerQuote2 = new AvengerQuote(1488, "flhhbgkvbn", "SOS", [ "photo.jpg" ]);
    $avengerQuote2->addComment("...");
    $listAvengerQuote = new ListAvengerQuotes();
    $listAvengerQuote->addAvengerQuote($avengerQuote1);
    $listAvengerQuote->addAvengerQuote($avengerQuote2);
    $listAvengerQuote->toXML("file.xml");
    echo '<div class="main"><div class="inner">To XML<pre><br>';
    print_r($listAvengerQuote); 
    echo '</pre></div><div class="inner">From XML<pre><br>';
    print_r($listAvengerQuote->fromXML("file.xml"));
    echo '</pre></div>';
    ?>
</body>

</html>