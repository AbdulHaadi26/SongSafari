import Joi from "joi";

const AttachmentSchemaValidator = Joi.object({
  _id: Joi.object().required(),
  name: Joi.string().required(),
  size: Joi.number().required(),
  path: Joi.string().required(),
  mime_type: Joi.string().required(),
  createdBy: Joi.object().required(),
  updatedBy: Joi.object(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  isActive: Joi.boolean(),
});

export { AttachmentSchemaValidator };
