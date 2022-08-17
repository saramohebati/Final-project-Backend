const DataBaseManager = require("../../../core/database/DataBaseManager");

class ChoiceRemover {
  static async deleteChoicePollId(id) {
    const query = `
    DELETE FROM participant_choice
    WHERE id = ${id}`;
    const result = await DataBaseManager.query(query);
    return result;
  }
}

module.exports = ChoiceRemover;
