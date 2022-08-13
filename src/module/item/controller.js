const ItemCreator = require("./model/create");
const ItemReader = require("./model/read");
const DatabaseManager = require("../../core/database/databaseManager");

class ItemController {
  static async createItem(req, res, next) {
    try {
      const pollItem = req.body;
      Array.from(pollItem).forEach(async (title) => {
        await ItemCreator.createItem(title);
      });
      const pollId = pollItem[0].poll_id;
      const pollQuery = `SELECT id FROM poll WHERE id = ${pollId}`;
      const findPollById = await DatabaseManager.query(pollQuery);
      if (findPollById[0].length === 0) {
        res.status(404).send({ message: "Poll doesn't Exist!" });
        return;
      }
      res.send({ message: "Create Items Successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async getAllItems(req, res, next) {
    try {
      const { id } = req.params;
      const pollItem = await ItemReader.getAllItems(id);
      res.json(pollItem);
    } catch (error) {
      next(error);
    }
  }

  static async getItemById(req, res, next) {
    try {
      const { id } = req.params;
      const item = await ItemReader.getItemsById(id);
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ItemController;
