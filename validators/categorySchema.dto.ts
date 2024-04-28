import Joi from "joi";

const CategorySchemaValidator = Joi.object({
  _id: Joi.object().required(),
  name: Joi.string().required(),
  description: Joi.string(),
  covers: Joi.array(),
  createdBy: Joi.object(),
  updatedBy: Joi.object(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  isActive: Joi.boolean(),
});

export { CategorySchemaValidator };
