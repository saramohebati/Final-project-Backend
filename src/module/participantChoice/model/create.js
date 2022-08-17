const DataBaseManager = require("../../../core/database/DataBaseManager");

class ChoiceCreator {
  static async createChoice(choiceData) {
    const { poll_item_id, participant_id } = choiceData;
    const query = `
        insert into participant_choice
        (poll_item_id, participant_id)
        values
        ('${poll_item_id}', '${participant_id}')
        `;
    const result = await DataBaseManager.query(query);
    return result;
  }
}

module.exports = ChoiceCreator;
