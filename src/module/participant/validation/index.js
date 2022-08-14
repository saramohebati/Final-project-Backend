const { celebrate, Joi, Segments } = require("celebrate");

class ParticipantValidation {
  static getParticipantsByIdSchema = celebrate({
    [Segments.PARAMS]: Joi.object()
      .keys({
        id: Joi.number().integer().positive().required(),
      })
      .max(1),
  });

  static createParticipantSchema = celebrate({
    [Segments.BODY]: Joi.object()
      .keys({
        poll_id: Joi.number().integer().positive().required(),
        name: Joi.string().required(),
        name: Joi.string().email().required(),
      })
      .required()
      .min(1),
  });

  static deleteParticipantSchema = celebrate({
    [Segments.PARAMS]: Joi.object()
      .keys({
        id: Joi.number().integer().positive().required(),
      })
      .max(1),
  });
}

module.exports = ParticipantValidation;
