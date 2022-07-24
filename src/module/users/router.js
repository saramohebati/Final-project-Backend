const express = require('express');
const UserController = require('./controller');
const AuthMiddleware = require('../../core/middleware/auth');

const router = express.Router();

router.get('/', AuthMiddleware.jwtTokenValidation, UserController.getAllUsers);
router.get('/id/:id', AuthMiddleware.jwtTokenValidation, UserController.getUserById);
router.post('/', UserController.createUser);

module.exports = router;
