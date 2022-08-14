const DataBaseManager = require("../../../core/database/DataBaseManager");

class ChoiceCreator {
  static async createChoice(choiceData) {
    const { pollItemId, participantId } = choiceData;
    const query = `
        insert into poll.participant_choice
        (poll_item_id, participant_id)
        values
        ('${pollItemId}', '${participantId}')
        `;
    const result = await DataBaseManager.query(query);
    return result;
  }
}

module.exports = ChoiceCreator;
