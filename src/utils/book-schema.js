const Joi = require('joi');

const bookSchema = {
    name: Joi.string().min(1).required(),
    author:Joi.string(),
    number:Joi.number(),
    date:Joi.date(),

};
console.log(bookSchema.name)

exports.validateBook = (book) => Joi.validate(book, bookSchema);
