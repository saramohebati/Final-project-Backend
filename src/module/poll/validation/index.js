const { celebrate, Joi, Segments } = require("celebrate");

class PollValidator {
  static getPollByIdSchema = celebrate({
    [Segments.PARAMS]: Joi.object()
      .keys({
        uuid: Joi.string().required(),
      })
      .max(1),
  });

  static createPollSchema = celebrate({
    [Segments.BODY]: Joi.object()
      .keys({
        title: Joi.string().required(),
        description: Joi.string(),
      })
      .required(),
  });

  static updatePollSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object()
      .keys({
        title: Joi.string(),
        description: Joi.string(),
      })
      .min(1),
  });

  static deletePollSchema = celebrate({
    [Segments.PARAMS]: Joi.object()
      .keys({
        uuid: Joi.string().required(),
      })
      .max(1),
  });
}

module.exports = PollValidator;
