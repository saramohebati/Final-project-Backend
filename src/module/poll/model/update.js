const DatabaseManager = require("../../../core/database/databaseManager");

class PollUpdater {
  static async updatePoll(id, userData) {
    const { title, description, link } = userData;
    const query = `
        UPDATE poll
        SET
          title = '${title}',
          description = '${description}',
          link = '${link}'
        WHERE id = ${id}`;
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = PollUpdater;
