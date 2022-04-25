var express = require('express');
var router = express.Router();

const utils = require('../utils/book-schema.js');
const bookService = require('./book-service.js');
const bookFactory = require('../factories/book-factory.js')
const Book = require('../models/books/book.js');

router.get("/books" , (request, response) => {
    response.send(bookService.findAll());
});

router.get("/books/:id" , (request, response) => {
    const bookId = request.params.id;
    const book = bookService.findById(parseInt(bookId));
    if(!book) return response.status(404).send("The book with the provided ID does not exist.");
    response.send(book);
});

router.post("/books", (request, response) => {
    //const { error } = utils.validateBook(request.body);

    //if(error) return response.status(400).send("Necessary information is not provided")

    try {
        //const newBook = new Book(1,request.body.name);
        const author = request.body.author ?? null;
        const number = request.body.number ?? null;
        const date = request.body.date ?? null;
        const newBook = bookFactory.create(request.body.name, author, number, date);
        bookService.add(newBook);
        response.status(201).send(newBook);
    } catch (e) {
        // TODO: implement a better error handling
        response.status(500).send(e.message);
    }

});


router.patch("/books/:id", (request, response) => {
    const bookId = request.params.id;
    const book = bookService.findById(parseInt(bookId));
    if(!book) return response.status(404).send("The book with the provided ID does not exist.");

    bookService.update(book);
 
    response.send(book);
});


router.delete("/books/:id", (request, response) => {
    const bookId = request.params.id;
    const book = bookService.findById(parseInt(bookId));
    if(!bookId) return response.status(404).send("The bookId with the provided ID does not exist.");

    bookService.remove(bookId);

    response.send(book);
});


module.exports = router;