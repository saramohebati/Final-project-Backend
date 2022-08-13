const DatabaseManager = require("../../../core/database/DataBaseManager");

class ItemRemover {
  static async deleteItemById(id) {
    const query = `
    DELETE FROM poll_item
    WHERE poll_id = ${id}`;
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = ItemRemover;
