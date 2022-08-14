const express = require("express");
const PollController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth");
const PollValidator = require('./validation'); 

const router = express.Router();

router.post('/', PollValidator.createPollSchema, AuthMiddleware.jwtTokenValidation, PollController.createPoll);
router.get('/', AuthMiddleware.jwtTokenValidation, PollController.getAllPolls);
router.get('/:uuid', PollValidator.getPollByIdSchema, AuthMiddleware.jwtTokenValidation, PollController.getPollById);
router.patch('/:uuid', PollValidator.updatePollSchema, AuthMiddleware.jwtTokenValidation, PollController.updatePoll);
router.delete('/:uuid', PollValidator.deletePollSchema, AuthMiddleware.jwtTokenValidation, PollController.removePoll);


module.exports = router;