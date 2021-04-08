CREATE DATABASE ucode_web;

CREATE USER 'irazumeyko'@'localhost' IDENTIFIED BY 'keklol228';
GRANT ALL PRIVILEGES ON ucode_web . * TO 'irazumeyko'@'localhost';
FLUSH PRIVILEGES;
