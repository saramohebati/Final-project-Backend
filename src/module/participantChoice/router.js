const express = require("express");
const ChoiceController = require("./controller");
const AuthMiddleware = require('../../core/middleware/auth');
const ChoiceValidator = require('./validation')

const router = express.Router();

router.post('/', ChoiceValidator.createChoiceSchema, AuthMiddleware.jwtTokenValidation, ChoiceController.createChoice);
router.get('/:id', ChoiceValidator.getChoiceByIdSchema, AuthMiddleware.jwtTokenValidation, ChoiceController.getChoiceById);
router.delete('/:id', ChoiceValidator.getChoiceByIdSchema, AuthMiddleware.jwtTokenValidation, ChoiceController.removeChoices);

module.exports = router;