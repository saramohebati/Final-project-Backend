const express = require("express");
const PollController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth"); 

const router = express.Router();

router.post('/', AuthMiddleware.jwtTokenValidation, PollController.createPoll);
router.get('/', AuthMiddleware.jwtTokenValidation, PollController.getAllPolls);
router.get('/:id', AuthMiddleware.jwtTokenValidation, PollController.getPollById);

module.exports = router;