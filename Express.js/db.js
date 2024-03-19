const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blood_donors_community', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.emit('db_error', err); // Emit custom event for handling elsewhere
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;
