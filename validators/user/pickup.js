const Joi = require("joi");
const pickup = {};
pickup.create = Joi.object({
    products: Joi.array()
        .items(Joi.object({
            name: Joi.string().required(),
            category: Joi.string(),
            weight: Joi.number().required()
        }))
        .min(1)
        .required(),
    delivery_type: Joi.string().required(),
    reciever: Joi.object({
        name: Joi.string().required(),
        phone: Joi.string().required(),
        address: {
            city: Joi.string().required(),
            location: Joi.string().required()
        },
    }).required(),
})

module.exports = {
    pickup,
};