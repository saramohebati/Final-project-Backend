const DataBaseManager = require("../../../core/database/DataBaseManager");

class ParticipantRemover {
  static async deleteParticipantByPollId(id) {
    const query = `
    DELETE FROM participant
    WHERE poll_id = ${id}`;
    const result = await DataBaseManager.query(query);
    return result;
  }
}

module.exports = ParticipantRemover;
