use ucode_web;

SELECT heroes.NAME, teams.NAME FROM heroes
LEFT JOIN teams ON teams.HERO_ID = heroes.ID;

SELECT heroes.NAME, powers.NAME FROM powers
LEFT JOIN heroes ON powers.HERO_ID = heroes.ID;

SELECT heroes.NAME, powers.NAME, teams.NAME FROM heroes
JOIN powers ON powers.HERO_ID = heroes.ID
JOIN teams ON teams.HERO_ID = heroes.ID;