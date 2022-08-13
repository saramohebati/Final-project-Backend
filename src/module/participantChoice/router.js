const express = require("express");
const choiceController = require("./controller");
const AuthMiddleware = require('../../core/middleware/auth');
const ChoiceController = require("./controller");

const router = express.Router();

router.post('/', AuthMiddleware.jwtTokenValidation, ChoiceController.createChoice);
router.get('/:id', AuthMiddleware.jwtTokenValidation, ChoiceController.getChoiceById);

module.exports = router;