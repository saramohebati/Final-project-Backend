const DataBaseManager = require("../../../core/database/databaseManager");

class PollReader {
  static async getAllPolls(userId) {
    const query = `
    SELECT poll.title, poll.description, poll.link, COUNT(p.id) as participant, p.name
    FROM poll 
     LEFT JOIN participant p on poll.id = p.poll_id
    WHERE poll.user_id = ${userId}
    GROUP BY p.poll_id;
    `;
    const result = await DataBaseManager.query(query);
    return result;
  }

  static async getPollById(userId, uuid) {
    const query = `
    SELECT id, title, description, link
    FROM poll
    WHERE link = '${uuid}'
          And user_id = ${userId};
    `;
    const result = await DataBaseManager.query(query);
    return result[0];
  }
}

module.exports = PollReader;
