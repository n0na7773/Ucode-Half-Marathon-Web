use ucode_web;

CREATE TABLE IF NOT EXISTS powers (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    HERO_ID INT NOT NULL,
    NAME VARCHAR(255) NOT NULL,
    POINTS INT NOT NULL,
    TYPE ENUM('attack', 'defense') NOT NULL,
    FOREIGN KEY(HERO_ID) REFERENCES heroes(ID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS races (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    HERO_ID INT NOT NULL,
    NAME TEXT NOT NULL,
    FOREIGN KEY(HERO_ID) REFERENCES heroes(ID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS teams (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    HERO_ID INT NOT NULL,
    NAME TEXT NOT NULL,
    FOREIGN KEY(HERO_ID) REFERENCES heroes(ID) ON DELETE CASCADE
);

INSERT INTO powers (HERO_ID, NAME, POINTS, TYPE) 
VALUES (1, 'bloody fist', 110, 'attack'),
(2, 'iron shield', 200, 'defense'),
(5, 'bloody fist', 155, 'attack'),
(6, 'iron shield', 230, 'defense'),
(3, 'bloody fist', 150, 'attack'),
(1, 'iron shield', 190, 'defense'),
(2, 'tell a joke', 500, 'attack');

INSERT INTO races (HERO_ID, NAME)
VALUES (1, 'Human'),
(2, 'Kree'),
(3, 'Kree'),
(6, 'Kree');

INSERT INTO teams (HERO_ID, NAME)
VALUES (1, 'Avengers'),
(1, 'Hydra'),
(6, 'Avengers'),
(5, 'Avengers'),
(2, 'Avengers'),
(3, 'Hydra');