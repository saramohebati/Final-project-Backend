const ChoiceCreator = require("./model/create");

class ChoiceController {
    
  static async createChoice(req, res, next) {
    try {
      const choiceData = req.body;
      const result = await ChoiceCreator.createChoice(choiceData);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async getChoiceById(req, res, next) {
    try {
      const { id } = req.params;
      const choiceData = await ChoiceReader.getChoiceById(id);
      res.json(choiceData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ChoiceController;
