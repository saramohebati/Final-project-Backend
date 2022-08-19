const DataBaseManager = require("../../../core/database/databaseManager");

class PollReader {
  static async getAllPolls(userId) {
    const query = `
    SELECT poll.title, poll.description, poll.link, COUNT(p.id) as participant, p.name
    FROM poll 
     LEFT JOIN participant p on poll.id = p.poll_id
    WHERE poll.user_id = ${userId}
    GROUP BY poll.id;
    `;
    const result = await DataBaseManager.query(query);
    return result;
  }

  static async getPollById(userId, uuid) {
    const query = `
    SELECT poll.title, poll.description, p.name, i.title as poll_item
    FROM poll
      LEFT JOIN participant p on poll.id = p.poll_id
      LEFT JOIN participant_choice c on p.id = c.participant_id
      LEFT JOIN poll_item i on i.poll_id = poll.id
    WHERE link = '${uuid}'
          And user_id = ${userId};
    `;
    const result = await DataBaseManager.query(query);
    return result[0];
  }
}

module.exports = PollReader;
