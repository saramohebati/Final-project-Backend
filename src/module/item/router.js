const express = require("express");
const ItemController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth"); 

const router = express.Router();

router.get('/:id',  AuthMiddleware.jwtTokenValidation, ItemController.getAllItems);
router.get('/id/:id', AuthMiddleware.jwtTokenValidation, ItemController.getItemById);
router.post('/', AuthMiddleware.jwtTokenValidation, ItemController.createItem);
router.delete('/:id', AuthMiddleware.jwtTokenValidation, ItemController.removeItem);


module.exports = router;