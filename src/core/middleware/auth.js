const UserReader = require("../../module/users/model/read");
const AuthenticationManager = require("../auth");

class AuthMiddleware {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await UserReader.getUsersByUsernameAndPassword(
        username,
        password
      );
      if (!user) {
        res.status(401).end();
      } else {
        const payload = {
          user: {
            id: user.id,
            email: user.email,
          },
        };
        const jwt = AuthenticationManager.getJwtToken(payload);
        res.send(jwt);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static jwtTokenValidation(req, res, next) {
    try {
      const jwtToken = AuthMiddleware.parseAuthorizationToken(
        req.headers.authorization
      );
      if (!jwtToken) {
        throw new Error("Token not exists!");
      }

      const payload = AuthenticationManager.getJwtTokenPayload(jwtToken);
      req.loggedInUserData = payload.user;

      next();
    } catch (error) {
      console.error(error);
      res.status(401).end();
    }
  }

  static parseAuthorizationToken(authorization) {
    if (!authorization) {
      throw new Error("Authorization Token not found!");
    }
    const bearer = authorization.split(" ");
    return bearer[1];
  }
}

module.exports = AuthMiddleware;
