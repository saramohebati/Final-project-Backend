const UserReader = require('./model/read')

class UserController {
    
 static async getAllUsers(req, res, next){
    const users = await UserReader.getAllUsers();
    res.send(users);
 }
}

module.exports = UserController;