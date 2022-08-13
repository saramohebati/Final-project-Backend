const ItemReader = require("./model/read");

const DatabaseManager = require("../../core/database/databaseManager");

class ItemController {

    static async getAllItems(req, res, next) {
        try {
          const {id} = req.params; 
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
