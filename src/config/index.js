const DataBaseSecrets = require('./databaseSecrets');
const {jwt} = require('./envManager');

module.exports = {
    database: DataBaseSecrets,
    jwt,
};