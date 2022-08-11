const DatabaseManager = require("../../../core/database/databaseManager");

class PollReader {
  static async getAllPolls(userId) {
    const query = `
    SELECT title, description, link
    FROM poll 
    WHERE user_id = ${userId};
    `;
    const result = await DatabaseManager.query(query);
    return result;
  }

  static async getPollById(userId, uuid) {
    const query = `
    SELECT title, description, link
    FROM poll
    WHERE id = '${uuid}'
          And user_id = ${userId};
    `;
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = PollReader;
