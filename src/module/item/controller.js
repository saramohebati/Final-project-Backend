const ItemCreator = require("./model/create");
const ItemReader = require("./model/read");
const ItemRemover = require("./model/delete");
const DataBaseManager = require("../../core/database/DataBaseManager");

class ItemController {
  static async createItem(req, res, next) {
    try {
      const pollItem = req.body;
      pollItem.forEach(async (poll_item) => {
        await ItemCreator.createItem(poll_item);
      });
      const pollId = pollItem[0].poll_id;
      const pollQuery = `SELECT id FROM poll WHERE id = ${pollId}`;
      const findPollById = await DataBaseManager.query(pollQuery);
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

  static async removeItem(req, res, next) {
    try {
      const { id } = req.params;
      const result = await ItemRemover.deleteItemById(id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ItemController;
