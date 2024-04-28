import Joi from "joi";

const TagSchemaValidator = Joi.object({
  _id: Joi.object().required(),
  name: Joi.string().required(),
  createdBy: Joi.object().required(),
  updatedBy: Joi.object(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  isActive: Joi.boolean(),
});

export { TagSchemaValidator };
