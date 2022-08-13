const DataBaseManager = require("../../../core/database/databaseManager");

class PollRemover {
  static async deletePollById(id) {
    const query = `
    DELETE FROM poll
    WHERE id = ${id}`;
    const result = await DataBaseManager.query(query);
    return result;
  }
}

module.exports = PollRemover;