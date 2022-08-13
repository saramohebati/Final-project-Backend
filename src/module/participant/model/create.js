const DataBaseManager = require("../../../core/database/DataBaseManager");

class ParticipantCreator {
  static async createParticipant(pollId, participantData) {
    const { name, email } = participantData;
    const query = `
    insert into poll.participant
      (poll_id, name, email)
      values
      ('${pollId}', '${name}', '${email}');
      `;
    const result = await DataBaseManager.query(query);
    return result;
  }
}

module.exports = ParticipantCreator;
