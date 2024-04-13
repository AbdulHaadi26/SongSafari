import Joi from 'joi';

const UserSchemaValidator = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    birthday: Joi.date(),
    gender: Joi.string(),
    createdAt: Joi.date(),
    updatedAt: Joi.date()
});

export { UserSchemaValidator }