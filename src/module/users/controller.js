const UserReader = require("./model/read");
const UserCreator = require("./model/create");

class UserController {
  static async getAllUsers(req, res, next) {
    const users = await UserReader.getAllUsers();
    res.send(users);
  }

  static async getUserById(req, res, next) {
    try {
      const userId = req.params.id;
      if (userId != req.loggedInUserData.id) {
        throw new Error("YOU can not get other users data");
      }
      const result = await UserReader.getUserById(userId);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async createUser(req, res, next) {
    try {
      const userData = req.body;
      const result = await UserCreator.createUser(userData);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
