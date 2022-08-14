const express = require("express");
const ItemController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth");
const ItemValidator = require("./validation");

const router = express.Router();

router.get('/:id', ItemValidator.getItemByIdSchema,  AuthMiddleware.jwtTokenValidation, ItemController.getAllItems);
router.get('/id/:id', ItemValidator.getItemByIdSchema, AuthMiddleware.jwtTokenValidation, ItemController.getItemById);
router.post('/', ItemValidator.createItemSchema, AuthMiddleware.jwtTokenValidation, ItemController.createItem);
router.delete('/:id', ItemValidator.getItemByIdSchema, AuthMiddleware.jwtTokenValidation, ItemController.removeItem);


module.exports = router;