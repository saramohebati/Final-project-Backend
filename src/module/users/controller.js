const UserReader = require('./model/read')
const UserCreator = require('./model/create');

class UserController {

   static async getAllUsers(req, res, next) {
      const users = await UserReader.getAllUsers();
      res.send(users);
   }

   static async getUserById(req, res, next) {
      try {
         console.log('req.jwt_payload :>> ', req.jwt_payload);
         const userId = req.params.id;
         if (userId != req.jwt_payload.id) {
            throw new Error("YOU can not get other users data");
          } 
            const result = await UserReader.getUserById(userId);
            res.send(result);
      } catch (error) {
         res.status(500).send(error.message);
      }
   }

   static async createUser(req, res, next) {
      try {
         const userData = req.body;
         const result = await UserCreator.createUser(userData);
         res.send(result);
      } catch (error) {
         res.status(500).send(error.message);
      }
   }
}

module.exports = UserController;