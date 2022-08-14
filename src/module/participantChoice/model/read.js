const DataBaseManager = require("../../../core/database/DataBaseManager");

class ChoiceReader {
  static async getChoiceById(id) {
    const query = `
      SELECT poll_item_id
      FROM poll.participant_choice
      WHERE participant_id = ${id};
    `;
    const result = await DataBaseManager.query(query);
    return result[0];
  }
}

module.exports = ChoiceReader;
