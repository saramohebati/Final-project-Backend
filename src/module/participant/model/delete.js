const DatabaseManager = require("../../../core/database/DataBaseManager");

class ParticipantRemover {
  static async deleteParticipantByPollId(id) {
    const query = `
    DELETE FROM participant
    WHERE poll_id = ${id}`;
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = ParticipantRemover;
