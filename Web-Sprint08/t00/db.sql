CREATE DATABASE ucode_web;
CREATE USER 'irazumeyko'@'localhost' IDENTIFIED WITH mysql_native_password BY 'securepass';
GRANT ALL PRIVILEGES ON ucode_web . * TO 'irazumeyko'@'localhost';
GRANT ALL PRIVILEGES ON sword . * TO 'irazumeyko'@'localhost';
FLUSH PRIVILEGES;