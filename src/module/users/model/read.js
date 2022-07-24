const DataBaseManager = require('../../../core/database/DataBaseManager');

class UserReader {

    static async getAllUsers() {
        const query = 'select * from poll.users;';
        const result = await DataBaseManager.query(query);
        return result;
    }
    static async getUserById(userId) {
        const query = `
        select *
        from poll.users
        where id = ${userId}
        `;
        return DataBaseManager.query(query);
    }

    static async getUsersByEmailAndPassword(email, pasword) {
        const query = `
        select * 
        from users
        where 
              email = '${email}'
        and
              pasword = '${pasword}';
        `;
        const dbResult = await DataBaseManager.query(query);
        return dbResult[0];
    }
}

module.exports = UserReader; 
