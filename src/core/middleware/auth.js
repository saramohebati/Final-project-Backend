const UserReader = require('../../module/users/model/read');

class AuthMiddleware {

    static async login(req, res, next) {
        try {
            const { email, pasword } = req.body;
            const user = await UserReader.getUsersByEmailAndPassword(email, pasword);
            res.send("User exists in database");
        } catch (error) {
            res.statuse(500).send(error.message);
        }

    }
}

module.exports = AuthMiddleware