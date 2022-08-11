const express = require('express');
const UserController = require('./controller');
const AuthMiddleware = require('../../core/middleware/auth');
const UserValidator = require("./validation");

const router = express.Router();

router.get('/', AuthMiddleware.jwtTokenValidation, UserController.getAllUsers);
router.get('/id/:id', UserValidator.getUserByIdSchema, AuthMiddleware.jwtTokenValidation, UserController.getUserById);
router.post('/', UserValidator.createUserSchema, UserController.createUser);

module.exports = router;
