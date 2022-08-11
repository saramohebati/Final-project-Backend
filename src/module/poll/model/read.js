const DatabaseManager = require("../../../core/database/databaseManager");

class PollReader {
  static async getAllPolls(userId) {
    const query = `
      SELECT poll.*, COUNT(p.id) as participants, p.name
      FROM poll LEFT JOIN participant p on poll.id = p.poll_id
      WHERE poll.user_id = ${userId}
      GROUP BY p.poll_id;
    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }

  static async getPollById(userId, id) {

    const query = `
      SELECT p.name, i.title, poll.*
      FROM participant p
              INNER JOIN participant_choice c on p.id = c.participant_id
              INNER JOIN poll_item i on c.poll_item_id = i.id
              INNER JOIN poll poll on i.poll_id = poll.id
      WHERE poll.id = ${id}
              AND poll.user_id = ${userId};
    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }
}

module.exports = PollReader;