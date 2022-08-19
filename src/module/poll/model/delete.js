const DataBaseManager = require("../../../core/database/databaseManager");

class PollRemover {
  static async deletePollById(uuid) {
    const query = `
    DELETE FROM poll
    WHERE link = '${uuid}'`;
    const result = await DataBaseManager.query(query);
    return result;
  }
}

module.exports = PollRemover;
