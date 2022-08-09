const express = require("express");
const PollController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth"); 



const router = express.Router();

router.post('/', PollController.createPoll);


module.exports = router;