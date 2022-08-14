const express = require("express");
const ItemController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth");
const ItemValidation = require("./validation");

const router = express.Router();

router.get('/:id', ItemValidation.getItemByIdSchema,  AuthMiddleware.jwtTokenValidation, ItemController.getAllItems);
router.get('/id/:id', ItemValidation.getItemByIdSchema, AuthMiddleware.jwtTokenValidation, ItemController.getItemById);
router.post('/', ItemValidation.createItemSchema, AuthMiddleware.jwtTokenValidation, ItemController.createItem);
router.delete('/:id', ItemValidation.getItemByIdSchema, AuthMiddleware.jwtTokenValidation, ItemController.removeItem);


module.exports = router;