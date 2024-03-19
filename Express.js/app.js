// Import required modules
const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const morgan = require('morgan');

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Logging middleware

// Use routes
app.use('/api', routes); // Assuming all routes are defined in the routes module under '/api'

// Root route handler
app.get('/', (req, res) => {
  res.send('Welcome to the Blood Donors Community API!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
