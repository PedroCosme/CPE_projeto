const {celebrate, Segments, Joi} = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            description: Joi.string().required(),
            product_img : Joi.string().required()
        }),
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            product_id: Joi.string().required(),
        }),
    }),
    getAll: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
        }),
    }),
    updateById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            product_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().optional(),
            description: Joi.string().optional(),
            product_img : Joi.string().optional()
    })
    .min(1),
}),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            product_id: Joi.string().required(),
        }),
    }),
};