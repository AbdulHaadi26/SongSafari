import Joi from "joi";

const AlbumSchemaValidator = Joi.object({
  _id: Joi.object().required(),
  name: Joi.string().required(),
  description: Joi.string(),
  cover: Joi.array(),
  tags: Joi.array(),
  categories: Joi.array(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  isActive: Joi.boolean(),
});

export { AlbumSchemaValidator };
