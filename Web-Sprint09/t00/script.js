function is_correct() {
    let pswd = document.getElementById('password');
    let conf_pswd = document.getElementById('repeat_password');
    if(pswd.value.localeCompare(conf_pswd.value)) {
        pswd.style.border = '2px solid red';
        conf_pswd.style.border = '2px solid red';
        document.getElementById('error_password').innerHTML = 'Error! Passwords doesn`t match!';
    } else {
        pswd.style.border = '0';
        conf_pswd.style.border = '0';
        document.getElementById('error_password').innerHTML = '';
    }
}