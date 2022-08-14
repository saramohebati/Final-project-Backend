const DataBaseManager = require("../../../core/database/DataBaseManager");

class ChoiceRemover {
  static async deleteChoicePollId(id) {
    const query = `
    DELETE FROM poll.participant_choice
    WHERE poll_id = ${id}`;
    const result = await DataBaseManager.query(query);
    return result;
  }
}

module.exports = ChoiceRemover;
