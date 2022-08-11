const PollCreator = require("./model/create");
const PollReader = require("./model/read");
const PollUpdater = require("./model/update");
const PollRemover = require("./model/delete");

class PollController {

  static async createPoll(req, res, next) {
    try {
      const userData = req.body;
      const userId = req.loggedInUserData.id;
      const result = await PollCreator.createPoll(userId, userData);
      res.send(result);
      res.json(result);
    } catch (error) {
      res.status(500).send(error.message);
      next(error);
    }
  }

  static async getAllPolls(req, res, next) {
    try {
      const userId = req.loggedInUserData.id;
      const polls = await PollReader.getAllPolls(userId);
      res.json(polls);
    } catch (error) {
      next(error);
    }
  }

  static async getPollById(req, res, next) {
    try {
      const { id } = req.params;
      const userId = req.loggedInUserData.id;
      const poll = await PollReader.getPollById(userId, id);
      res.json(poll);
    } catch (error) {
      next(error);
    }
  }

  static async updatePoll(req, res, next) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const result = await PollUpdater.updatePoll(id, userData);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async removePoll(req, res, next) {
    try {
      const { id } = req.params;
      const result = await PollRemover.deletePollById(id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PollController;
