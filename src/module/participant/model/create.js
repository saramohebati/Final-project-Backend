const DataBaseManager = require("../../../core/database/DataBaseManager");

class ParticipantCreator {
  static async createParticipant(participantData) {
    const { poll_id, name, email } = participantData;
    const query = `
    insert into participant
      (poll_id, name, email)
      values
      ('${poll_id}', '${name}', '${email}');
      `;
    const result = await DataBaseManager.query(query);
    return result;
  }
}

module.exports = ParticipantCreator;
