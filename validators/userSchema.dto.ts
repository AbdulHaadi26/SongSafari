import Joi from "joi";

const UserSchemaValidator = Joi.object({
  _id: Joi.object().required(),
  name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  birthday: Joi.date().optional(),
  gender: Joi.string().optional(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  isActive: Joi.boolean(),
});

export { UserSchemaValidator };
