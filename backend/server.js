// server.js
const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const pool = require('./db'); // Assuming db.js is in the same directory
const bodyParser = require('body-parser'); // Import bodyParser middleware

// Use cors middleware to allow requests from all origins
app.use(cors());
app.use(bodyParser.json()); // Use bodyParser middleware to parse JSON request body



// Endpoint to add user to the database
app.post('/api/addUser', (req, res) => {
    const { Email, Password, FirstName, LastName, Birthday, Gender, TelNumber } = req.body;
    const query = 'INSERT INTO users (Email, Password, FirstName, LastName, Birthday, Gender, TelNumber) VALUES (?, ?, ?, ?, ?, ?, ?)';
    pool.query(query, [Email, Password, FirstName, LastName, Birthday, Gender, TelNumber], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({ message: 'Data added successfully' });
        }
    });
});

// Login endpoint
// Login endpoint
app.post('/api/userLogin', (req, res) => {
    const { Email, Password } = req.body;
    const query = 'SELECT * FROM users WHERE Email = ? AND Password = ?';
    pool.query(query, [Email, Password], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (result.length > 0) {
                res.status(200).json({ message: 'Login successful', user: result[0] });
            } else {
                res.status(401).json({ message: 'Invalid email or password' });
            }
        }
    });
});


// Endpoint to fetch categories
app.get('/api/categories', (req, res) => {
    pool.query('SELECT * FROM categories', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(result);
        }
    });
});


// Endpoint to add data to the database
app.post('/api/addData', (req, res) => {
    const {id, categoryName, description, imageUrl} = req.body; // Destructure request body
    // Process the request and add data to the database
    pool.query('INSERT INTO categories (id, categoryName, description, imageUrl) VALUES (?, ?, ?, ?)', [id, categoryName, description, imageUrl], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({ message: 'Data added successfully' });
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
