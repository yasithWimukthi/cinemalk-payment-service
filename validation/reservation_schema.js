const Joi = require("joi");

const schema = Joi.object({
  userId: Joi.string().required(),
  cusName: Joi.string().required(),
  image:Joi.string().required(),
  movieName: Joi.string().required(),
  theater: Joi.string().required(),
  date: Joi.date().required(),
  showTime: Joi.string().required(),
  noOfSeats: Joi.number().required(),
});
module.exports = schema;
