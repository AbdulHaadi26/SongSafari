import Joi from "joi";

const SongSchemaValidator = Joi.object({
  _id: Joi.object().required(),
  name: Joi.string().required(),
  description: Joi.string(),
  cover: Joi.string(),
  tags: Joi.array(),
  categories: Joi.array(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  isActive: Joi.boolean(),
});

export { SongSchemaValidator };
