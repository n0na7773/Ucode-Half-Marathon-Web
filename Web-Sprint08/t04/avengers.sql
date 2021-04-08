USE ucode_web;

SELECT output.HERO_ID, output.POINTS FROM (
    SELECT powers.HERO_ID, SUM(powers.POINTS) AS POINTS
    FROM powers GROUP BY powers.HERO_ID
) AS output ORDER BY output.POINTS DESC LIMIT 1;

SELECT output.HERO_ID, output.POINTS FROM (
    SELECT powers.HERO_ID, SUM(powers.POINTS) AS POINTS
    FROM powers WHERE powers.TYPE = 'defense'
    GROUP BY powers.HERO_ID
) AS output ORDER BY output.POINTS ASC LIMIT 1;

SELECT output.HERO_ID, output.POINTS FROM (
    SELECT powers.HERO_ID, SUM(powers.POINTS) AS POINTS FROM (
        SELECT teams.HERO_ID FROM teams GROUP BY teams.HERO_ID HAVING COUNT(*) = 1
    ) AS by_power INNER JOIN powers ON by_power.HERO_ID = powers.HERO_ID GROUP BY powers.HERO_ID
) AS output INNER JOIN teams ON output.HERO_ID = teams.HERO_ID WHERE teams.NAME = 'Avengers' ORDER BY output.POINTS DESC;

SELECT teams.NAME, SUM(powers.POINTS) as total_sum FROM teams 
JOIN powers ON teams.HERO_ID = powers.HERO_ID
WHERE teams.NAME IN ('Avengers', 'Hydra') GROUP BY teams.NAME
ORDER BY SUM(powers.POINTS);