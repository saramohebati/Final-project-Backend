const ParticipantReader = require("./model/read");

class ParticipantController {
    
  static async getAllParticipantsByPollId(req, res, next) {
    try {
      const { id } = req.params;
      const items = await ParticipantReader.getAllParticipant(id);
      res.json(items);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ParticipantController;
