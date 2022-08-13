const express = require("express");
const choiceController = require("./controller");
const AuthMiddleware = require('../../core/middleware/auth');

const router = express.Router();

router.post('/', AuthMiddleware.jwtTokenValidation, choiceController.createChoice);

module.exports = router;