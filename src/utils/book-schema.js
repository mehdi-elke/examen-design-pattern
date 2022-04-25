const Joi = require('joi');

const bookSchema = {
    name: Joi.string().min(1).required(),
    author: Joi.string(),
    number: Joi.number()
};

exports.validatebook = (book) => Joi.validate(book, bookSchema);
