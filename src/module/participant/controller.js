const ParticipantCreator = require("./model/create");
const ParticipantReader = require("./model/read");
const ParticipantRemover = require("./model/delete");

class ParticipantController {
  static async createParticipant(req, res, next) {
    try {
      const participantData = req.body;
      const result = await ParticipantCreator.createParticipant(
        participantData
      );
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async getAllParticipantsByPollId(req, res, next) {
    try {
      const { id } = req.params;
      const items = await ParticipantReader.getAllParticipant(id);
      res.json(items);
    } catch (error) {
      next(error);
    }
  }

  static async removeParticipants(req, res, next) {
    try {
      const { id } = req.params;
      const result = await ParticipantRemover.deleteParticipantByPollId(id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ParticipantController;
