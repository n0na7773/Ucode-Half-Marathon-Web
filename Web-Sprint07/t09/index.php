<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css" type="text/css">
    <title>Marvel API</title>
</head>

<body>
    <h1 class="main_header">Comics from Marvel API</h1>
    <?php
    $ts = time();
    $public_key = "16d80e521d6fdfbc1de069743e6da95b";
    $private_key = "a6e63735ae281351e820f8387bc7b537b5923f90";
    $call = "http://gateway.marvel.com/v1/public/comics?ts=".$ts."&apikey=".$public_key."&hash=".md5($ts.$private_key.$public_key);
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $call);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $json = curl_exec($curl);
    curl_close($curl);

    echo(parse_first_json(json_decode($json, true)));

    $iter = 0;
    $updated_json = json_decode($json, true);
    foreach ($updated_json as $k => $v) {
        if($iter < 6) {
            unset($updated_json[$k]);
            $iter++;
        }
        else break;
    }

    echo(parse_json($updated_json));
    
    function parse_first_json($json) {
        $iter = 0;
        $page = '';
        foreach ($json as $k => $v) {
            if($iter < 6) {
                $page .= "<div class=\"line\"> <span class=\"key\">$k: </span> <span class=\"value\">$v</span> </div>";
                $iter++;
            }
            else break;
        }
        return $page."</div>";
    }
    
    function parse_json($json) {
        $page = '<div class="block">';
        foreach ($json as $k => $v) {
            if (is_array($v)) {
                $page .= "<span class=\"header\"><br>$k:</span>";
                $page .= parse_json($v);
            } else {
                $page .= "<div class=\"line\"> <span class=\"key\">$k: </span> <span class=\"value\">$v</span> </div>";
            }
        }
        return $page."</div>";
    }
    ?>
</body>

</html>