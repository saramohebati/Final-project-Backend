const DataBaseManager = require('../../../core/database/DataBaseManager');

class PollCreator {
    static createPoll(userData) {
        const{userId, title, description, link} = userData;
        const query = `
        insert into poll.users
        (user_id, title, description, link)
        values
        ('${userId}', '${title}', '${description}', '${link}');
        `;
        return DataBaseManager.query(query);
    }
}

module.exports = PollCreator;