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
}

module.exports = UserReader; 
