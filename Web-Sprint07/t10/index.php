<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css" type="text/css">
    <title>Make square image</title>
</head>

<body>
    <h1>Make square image</h1>
    <form action="index.php" method="post">
        <input type="url" name="img_url" placeholder="Image url..">
        <input type="submit" name="go" value="Go">
    </form>
    <?php
    if(isset($_POST['img_url']) && isset($_POST['go'])) {
        $url = $_POST['img_url'];
        $initial = 'initial';
        $ch = curl_init($url);
        $fp = fopen($initial, 'wb');
        curl_setopt($ch, CURLOPT_FILE, $fp);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_exec($ch);
        curl_close($ch);
        fclose($fp);
        if(strpos($url, '.jpg') || strpos($url, '.jpeg')) {
            $temp = imagecreatefromjpeg($initial);
            $sizex = imagesx($temp);
            $sizey = imagesy($temp);
            $res = imagecreatetruecolor($sizex * 2, $sizey * 2);

            imagecopyresampled($res, $temp, 0, 0, 0, 0, $sizex, $sizey, $sizex, $sizey);

            $temp = imagecreatefromjpeg($initial);
            imagefilter($temp, IMG_FILTER_COLORIZE, 255, 0, 0);
            imagecopyresampled($res, $temp, $sizex, 0, 0, 0, $sizex, $sizey, $sizex, $sizey);

            $temp = imagecreatefromjpeg($initial);
            imagefilter($temp, IMG_FILTER_COLORIZE, 0, 255, 0);
            imagecopyresampled($res, $temp, 0, $sizey, 0, 0, $sizex, $sizey, $sizex, $sizey);

            $temp = imagecreatefromjpeg($initial);
            imagefilter($temp, IMG_FILTER_COLORIZE, 0, 0, 255);
            imagecopyresampled($res, $temp, $sizex, $sizey, 0, 0, $sizex, $sizey, $sizex, $sizey);

            imagejpeg($res, "res.jpg");

            echo '<img src="res.jpg">';
        } else if(strpos($url, '.png')) {

            $temp = imagecreatefrompng($initial);
            $sizex = imagesx($temp);
            $sizey = imagesy($temp);
            $res = imagecreatetruecolor($sizex * 2, $sizey * 2);

            imagecopyresampled($res, $temp, 0, 0, 0, 0, $sizex, $sizey, $sizex, $sizey);

            $temp = imagecreatefrompng($initial);
            imagefilter($temp, IMG_FILTER_COLORIZE, 255, 0, 0);
            imagecopyresampled($res, $temp, $sizex, 0, 0, 0, $sizex, $sizey, $sizex, $sizey);

            $temp = imagecreatefrompng($initial);
            imagefilter($temp, IMG_FILTER_COLORIZE, 0, 255, 0);
            imagecopyresampled($res, $temp, 0, $sizey, 0, 0, $sizex, $sizey, $sizex, $sizey);

            $temp = imagecreatefrompng($initial);
            imagefilter($temp, IMG_FILTER_COLORIZE, 0, 0, 255);
            imagecopyresampled($res, $temp, $sizex, $sizey, 0, 0, $sizex, $sizey, $sizex, $sizey);

            imagepng($res, "res.jpg");
            echo '<img src="res.jpg">';
        }
    }
    ?>
</body>

</html>