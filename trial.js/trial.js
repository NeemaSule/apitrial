
    const express = require('express');
    const mysql = require('mysql');
    const app = express();
    const port = 3000; 

    // Create a MySQL connection pool
    const pool = mysql.createPool({
        connectionLimit: 10, 
        host: 'localhost',   
        user: 'root', 
        password: '', 
        database: 'apitrial'  
    });

    // first endpoint '/students'
    app.get('/students', (req, res) => {
        pool.query('SELECT * FROM students', (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Error fetching students' });
                return;
            }
            res.json(results);
        });
    });

    // second endpoint '/subjects'
    app.get('/subjects', (req, res) => {
        pool.query('SELECT * FROM subjects ', (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Error fetching subjects' });
                return;
            }
            
            console.log("Query results:", results);
            res.json(results);
        });
    });

    // Start the server
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
  
        
   