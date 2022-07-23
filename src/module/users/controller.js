const UserReader = require('./model/read')

class UserController {
    
 static async getAllUsers(req, res, next){
    const users = await UserReader.getAllUsers();
    res.send(users);
 }
 static async getUserById(req, res, next) {
   try {
      const userId =req.params.id;
      const result = await UserReader.getUserById(userId);
      res.send(result);
   } catch(error) {
      res.status(500).send(error.message);
   }
 }
}

module.exports = UserController;