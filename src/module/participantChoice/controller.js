const ChoiceCreator = require("./model/create");

class choiceController {
    
  static async createChoice(req, res, next) {
    try {
      const choiceData = req.body;
      const result = await ChoiceCreator.createChoice(choiceData);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = choiceController;
