const { celebrate, Joi, Segments } = require("celebrate");

class ChoiceValidator {
  static getChoiceByIdSchema = celebrate({
    [Segments.PARAMS]: Joi.object()
      .keys({
        id: Joi.number().integer().positive().required(),
      })
      .max(1),
  });

  static createChoiceSchema = celebrate({
    [Segments.BODY]: Joi.object()
      .keys({
        participant_id: Joi.number().integer().positive().required(),
        poll_item_id: Joi.number().integer().positive().required(),
      })
      .required()
      .min(1),
  });
}

module.exports = ChoiceValidator;
