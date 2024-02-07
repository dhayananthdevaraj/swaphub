const express = require('express');
const userController = require('../controllers/userController');
const { validateToken } = require('../authUtils');
const router = express.Router();

router.post('/login', userController.getUserByUsernameAndPassword);
router.post('/register', userController.addUser);

module.exports = router;
