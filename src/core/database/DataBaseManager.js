const mysql2 = require('mysql2/promise');
const secrets = require('../../config/index');

class DataBaseManager {
    constructor() {
        this.poolCannection = mysql2.createPool(secrets.database);
    }

    async query(query) {
        const result = await this.poolCannection.query(query);
        return result[0];
    }
}

module.exports = new DataBaseManager();