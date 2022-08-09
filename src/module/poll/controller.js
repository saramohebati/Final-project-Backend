const PollCreator = require("./model/create"); 


class PollController {
  static async createPoll(req, res, next) {
    try {
      const userData = req.body;
      const userID = req.jwt_payload.id; 
      await PollCreator.createPoll(userID, userData);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

}

module.exports = PollController;