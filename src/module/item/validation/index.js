const { celebrate, Joi, Segments } = require("celebrate");

class ItemValidator {
  static getItemByIdSchema = celebrate({
    [Segments.PARAMS]: Joi.object()
      .keys({
        id: Joi.number().integer().positive().required(),
      })
      .max(1),
  });

  static createItemSchema = celebrate({
    [Segments.BODY]: Joi.array()
      .items(
        Joi.object().keys({
          poll_id: Joi.number().integer().required(),
          title: Joi.any().required(),
        })
      )
      .required()
      .min(1),
  });
}

module.exports = ItemValidator;
