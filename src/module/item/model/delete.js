const DataBaseManager = require("../../../core/database/DataBaseManager");

class ItemRemover {
  static async deleteItemById(id) {
    const query = `
    DELETE FROM poll.poll_item
    WHERE poll_id = ${id}`;
    const result = await DataBaseManager.query(query);
    return result;
  }
}

module.exports = ItemRemover;
