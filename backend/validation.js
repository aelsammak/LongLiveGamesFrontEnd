const Joi = require('@hapi/joi');

const registrationValidation = Joi.object({
        username: Joi.string().min(6).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(1024).required()
});

const loginValidation = Joi.object({
    username: Joi.string().min(6).max(30).required(),
    password: Joi.string().min(8).max(1024).required()
});

module.exports = {
    registrationValidation,
    loginValidation
}