const Joi = require('joi');

exports.create = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.object({
        city: Joi.string(),
        location: Joi.string()
    }),
    business: Joi.object({
        name: Joi.string(),
        social: Joi.array(),
        category: Joi.array(),
        address: {
            city: Joi.string(),
            road_no: Joi.string()
        }
    }),
});

