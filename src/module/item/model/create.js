const DataBaseManager = require("../../../core/database/DataBaseManager");

class ItemCreator {
  static createItem(pollItem) {
    const { pollId, title } = pollItem;
    const query = `
        insert into poll.poll_item
        (poll_id, title)
        values
        ('${pollId}', '${title}');
        `;
    return DataBaseManager.query(query);
  }
}

module.exports = ItemCreator; 