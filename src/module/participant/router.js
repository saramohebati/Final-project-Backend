const express = require("express");
const ParticipantController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth"); 

const router = express.Router();

router.get('/:id', AuthMiddleware.jwtTokenValidation, ParticipantController.getAllParticipantsByPollId);
router.delete('/:id', AuthMiddleware.jwtTokenValidation, ParticipantController.removeParticipants);

module.exports = router;