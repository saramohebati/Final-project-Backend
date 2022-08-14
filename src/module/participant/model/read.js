const DataBaseManager = require("../../../core/database/DataBaseManager");

class ParticipantReader {
  static async getAllParticipant(id) {
    const query = `
      SELECT name
      FROM poll.participant
      WHERE poll_id = ${id};
    `;
    const result = await DataBaseManager.query(query);
    return result[0];
  }
}

module.exports = ParticipantReader;
