<?php
    session_start();
    require_once(__DIR__.'/php/connection/DatabaseConnection.php');
    require_once(__DIR__.'/php/funcs.php');
    require_once(__DIR__.'/view/View.php');

    if(!$_SESSION['page']) {
        $_SESSION['page'] = 'login';
    } else if(isset($_POST['goto_register_btn'])) {
        $_SESSION['page'] = 'register';
    } else if(isset($_POST['remind_pass_btn'])) {
        $_SESSION['page'] = 'remind';
    } else if(isset($_POST['pass_btn'])) {
        $_SESSION['page'] = 'login';
    } else if(isset($_POST['login_btn'])) {
        $_SESSION['page'] = 'status';
    } else if(isset($_POST['create_btn'])) {
        $_SESSION['page'] = 'status';
    } else if(isset($_POST['logout_btn'])) {
        $_SESSION['status'] = '';
        $_SESSION['page'] = 'login';
    } else {
        $_SESSION['page'] = 'login';
    }
    if($_SESSION['page'] == 'status') {
        $page = new View(__DIR__.'/view/templates/status.php');
        $page->render();
    } else if($_SESSION['page'] == 'login') {
        $page = new View(__DIR__.'/view/templates/login.php');
        $page->render();
    } else if($_SESSION['page'] == 'register') {
        $page = new View(__DIR__.'/view/templates/register.php');
        $page->render();
    } else if($_SESSION['page'] == 'remind') {
        $page = new View(__DIR__.'/view/templates/remind.php');
        $page->render();
    } else {
        $page = new View(__DIR__.'/view/templates/err.php');
        $page->render();
    }
    require_once(__DIR__.'/php/funcs.php');

?>