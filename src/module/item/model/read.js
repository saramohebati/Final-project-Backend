const DatabaseManager = require("../../../core/database/DataBaseManager");

class ItemReader {
  static async getAllItems(id) {
    const query = `
      SELECT id, title
      FROM poll_item
      WHERE poll_id = ${id};
    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }

  static async getItemsById(id) {
    const query = `
      SELECT title
      FROM poll_item
      WHERE id = ${id};
    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }
}

module.exports = ItemReader;
