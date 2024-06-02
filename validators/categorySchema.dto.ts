import Joi from "joi";

const CategorySchemaValidator = Joi.object({
  _id: Joi.object().required(),
  name: Joi.string().required(),
  description: Joi.string(),
  cover: Joi.string(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  isActive: Joi.boolean(),
});

export { CategorySchemaValidator };
