const { celebrate, Joi, Segments } = require("celebrate");

class UserValidator {
  static createUserSchema = celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().min(5).required(),
      first_name: Joi.string(),
      last_name: Joi.string(),
      email: Joi.string().email().required(),
    }),
  });

  static getUserByIdSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().positive().required(),
    }),
  });
}

module.exports = UserValidator;
