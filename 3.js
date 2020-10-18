`SELECT users.name, SUM(distance) AS Distance_traveled, SUM(fare)*SUM(distance) AS total_fares 
FROM users 
JOIN rides ON users.id = rides.user_id 
GROUP BY users.name 
ORDER BY SUM(distance) DESC LIMIT 10`