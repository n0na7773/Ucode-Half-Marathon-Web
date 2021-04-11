function login() {
    let login_page = document.getElementById('login_page');
    let logout_page = document.getElementById('logout_page');
    login_page.className = 'login_page hidden';
    logout_page.className = 'logout_page';
}
function logout() {
    let login_page = document.getElementById('login_page');
    let logout_page = document.getElementById('logout_page');
    login_page.className = 'login_page';
    logout_page.className = 'logout_page hidden';
}
function error() { document.getElementById('error').innerHTML = 'Wrong input!'; }
function statusAdmin() {
    $status = document.getElementById('status');
    $status.innerHTML = 'Admin';
    $status.className = 'admin';
}
function statusUser() {
    $status = document.getElementById('status');
    $status.innerHTML = 'User';
    $status.className = 'user';
}