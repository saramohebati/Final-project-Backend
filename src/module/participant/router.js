const express = require("express");
const ParticipantController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth"); 
const ParticipantValidator = require("./validation");

const router = express.Router();

router.post('/', ParticipantValidator.createParticipantSchema, AuthMiddleware.jwtTokenValidation, ParticipantController.createParticipant);
router.get('/:id', ParticipantValidator.getParticipantsByIdSchema, AuthMiddleware.jwtTokenValidation, ParticipantController.getAllParticipantsByPollId);
router.delete('/:id', ParticipantValidator.deleteParticipantSchema, AuthMiddleware.jwtTokenValidation, ParticipantController.removeParticipants);

module.exports = router;