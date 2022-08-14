const express = require("express");
const ParticipantController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth"); 
const ParticipantValidation = require("./validation");

const router = express.Router();

router.post('/', ParticipantValidation.createParticipantSchema, AuthMiddleware.jwtTokenValidation, ParticipantController.createParticipant);
router.get('/:id', ParticipantValidation.getParticipantsByIdSchema, AuthMiddleware.jwtTokenValidation, ParticipantController.getAllParticipantsByPollId);
router.delete('/:id', ParticipantValidation.deleteParticipantSchema, AuthMiddleware.jwtTokenValidation, ParticipantController.removeParticipants);

module.exports = router;