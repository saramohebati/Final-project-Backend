const UserReader = require('./model/read')

class UserController {
    
 static getAllUsers(req, res, next){
    const users = UserReader.getAllUsers();
    res.send(users);
 }
}

module.exports = UserController;