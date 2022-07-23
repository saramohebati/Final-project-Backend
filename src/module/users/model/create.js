const DataBaseManager = require('../../../core/database/DataBaseManager');

class UserCreator {
    static createUser(userData) {
        const{username, pasword, first_name, last_name, email} = userData;
        const query = `
        insert into poll.users
        (username, pasword, first_name, last_name, email)
        values
        ('${username}', '${pasword}', '${first_name}', '${last_name}', '${email}');
        `;
        return DataBaseManager.query(query);
    }
}

module.exports = UserCreator;