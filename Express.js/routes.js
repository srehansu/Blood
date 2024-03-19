const express = require('express');
const router = express.Router();
const donorController = require('./Controller/donorController');
const userController = require('./Controller/userController');

// Donor routes
router.post('/donors', donorController.createDonor);
router.get('/donors', donorController.getAllDonors);

// User routes
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);

module.exports = router;
