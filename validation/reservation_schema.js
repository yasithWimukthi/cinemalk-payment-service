const Joi = require("joi");

const schema = Joi.object({
  cusName: Joi.string().required(),
  movieName: Joi.string().required(),
  theater: Joi.string().required(),
  date: Joi.date().required(),
  showTime: Joi.string().required(),
  seats: Joi.number().required(),
});
module.exports = schema;
