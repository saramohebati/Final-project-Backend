const DataBaseManager = require("../../../core/database/DataBaseManager");

class ItemCreator {
  static async createItem(pollItem) {
    const { pollId, title } = pollItem;
    const query = `
        insert into poll.poll_item
        (poll_id, title)
        values
        ('${pollId}', '${title}');
        `;
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = ItemCreator;
