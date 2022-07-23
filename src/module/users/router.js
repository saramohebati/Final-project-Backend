const express = require('express');
const UserController = require('./controller')

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/id/:id', UserController.getUserById);

module.exports = router;
