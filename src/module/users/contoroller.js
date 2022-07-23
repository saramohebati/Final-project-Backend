class UserController {
    static getAllUsers(req, res, next){
       res.send({
           message: 'this is users controller'
       });
    }
   }
   
   module.exports = UserController;