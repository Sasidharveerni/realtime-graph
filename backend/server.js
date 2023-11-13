const express = require('express');
const { Client } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
require('dotenv').config();
// Define a route to handle the button click
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const client = new Client({
  connectionString: connectionString,
});

// Connect to the database
client.connect();

// Define an API endpoint to fetch revenue data
app.get('/api/revenue-data', async (req, res) => {
  try {
    // Assuming you have a table named 'monthly_data'
    const { year } = req.query;
const tableName = year === 'cur' ? 'cur_year_data' : 'prev_year_data';
const result = await client.query(`SELECT * FROM ${tableName}`);

    // Send the data as JSON
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
// ... rest of your server.js file

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
