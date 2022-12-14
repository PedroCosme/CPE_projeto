const {celebrate, Segments, Joi} = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            user_id: Joi.string().required(),
            attraction_id: Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        })
        .unknown(),
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),
    }),

    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            favoriteAtt_id: Joi.string().required(),
        }),
    }),
};