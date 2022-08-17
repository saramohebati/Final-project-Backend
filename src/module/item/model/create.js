const DataBaseManager = require("../../../core/database/DataBaseManager");

class ItemCreator {
  static async createItem(pollItem) {
    const { poll_id, title } = pollItem;
    const query = `
        insert into poll_item
        (poll_id, title)
        values
        ('${poll_id}', '${title}');
        `;
    const result = await DataBaseManager.query(query);
    return result;
  }
}

module.exports = ItemCreator;
