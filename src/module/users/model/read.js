const DataBaseManager = require('../../../core/database/DataBaseManager');

class UserReader {
    
    static async getAllUsers() {
     const query = 'select * from poll.users;';
     const result = await DataBaseManager.query(query);
     return result;
    }
}

module.exports = UserReader; 
