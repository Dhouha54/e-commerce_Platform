// server.js
const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const pool = require('./db'); // Assuming db.js is in the same directory
const bodyParser = require('body-parser'); // Import bodyParser middleware

// Use cors middleware to allow requests from all origins
app.use(cors());
app.use(bodyParser.json()); // Use bodyParser middleware to parse JSON request body


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
