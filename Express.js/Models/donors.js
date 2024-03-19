const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  bloodType: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  availability: {
    type: [String]
  },
  additionalInfo: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;
