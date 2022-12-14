const {celebrate, Segments, Joi} = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            description: Joi.string().required(),
            attraction_img: Joi.string().required(),
        }),
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            attraction_id: Joi.string().required(),
        }),
    }),
    getAll: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
        }),
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            attraction_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().optional(),
            description: Joi.string().email().optional()
    })
    .min(1),
}),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            attraction_id: Joi.string().required(),
        }),
    }),
};