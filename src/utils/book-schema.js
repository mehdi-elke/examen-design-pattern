const Joi = require('joi');

const bookSchema = {
    name: Joi.string().min(1).required(),
};

exports.validateBook = (book) => Joi.validate(book, bookSchema);
