USE ucode_web;

SELECT output.NAME, output.ID FROM (
    SELECT heroes.ID, heroes.NAME FROM heroes WHERE heroes.NAME 
        LIKE BINARY '%a%' AND heroes.RACE != 'human' AND heroes.CLASS_ROLE IN ('tankman','healer')
) AS output JOIN teams ON output.ID = teams.HERO_ID GROUP BY output.ID HAVING COUNT(teams.HERO_ID) > 1 ORDER BY output.ID ASC LIMIT 1;