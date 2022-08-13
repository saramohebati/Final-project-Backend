const express = require("express");
const ChoiceController = require("./controller");
const AuthMiddleware = require('../../core/middleware/auth');

const router = express.Router();

router.post('/', AuthMiddleware.jwtTokenValidation, ChoiceController.createChoice);
router.get('/:id', AuthMiddleware.jwtTokenValidation, ChoiceController.getChoiceById);
router.delete('/:id', AuthMiddleware.jwtTokenValidation, ChoiceController.removeChoices);

module.exports = router;