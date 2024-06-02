import Joi from "joi";

const TagSchemaValidator = Joi.object({
  _id: Joi.object().required(),
  name: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  isActive: Joi.boolean(),
});

export { TagSchemaValidator };
