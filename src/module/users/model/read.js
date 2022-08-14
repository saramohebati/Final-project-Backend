const DataBaseManager = require("../../../core/database/DataBaseManager");

class UserReader {
  static async getAllUsers() {
    const query = "select * from poll.users;";
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

  static async getUsersByUsernameAndPassword(username, password) {
    const query = `
        select * 
        from poll.users
        where 
              username = '${username}'
        and
              password = '${password}';
        `;
    const dbResult = await DataBaseManager.query(query);
    return dbResult[0];
  }
}

module.exports = UserReader;
