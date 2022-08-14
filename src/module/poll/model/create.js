const DataBaseManager = require("../../../core/database/DataBaseManager");
const { v4: uuidv4 } = require("uuid");

class PollCreator {
  static createPoll(userId, userData) {
    const { title, description } = userData;
    let uuid = uuidv4();
    let link = uuid;
    const query = `
        insert into poll.poll
        (user_id, title, description, link)
        values
        ('${userId}', '${title}', '${description}', '${link}');
        `;
    return DataBaseManager.query(query);
  }
}

module.exports = PollCreator;
