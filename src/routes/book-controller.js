var express = require('express');
var router = express.Router();

const utils = require('../utils/book-schema.js');
const bookService = require('./book-service.js');
const Book = require('../models/books/book.js');
const factory = require('../models/factory');
const userservice = require("../routes/user-service");
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
    const { error } = utils.validateBook(request.body);
    console.log(error)
    if(error) return response.status(400).send("Necessary information is not provided")
    try {
        const newBook = factory.create(bookService.findAll().length+1, request.body.name, request.body.author, request.body.number, request.body.date)
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
    if(request.body.damaged === true){
        for(let user of userservice.findAll()){
            if(user.getBooks().toString().indexOf(bookId) >= 0){
                book.damaged = true;
                bookService.update(book);
                user.setPenalityPoint();
                response.send(book);
                return true;
            }
        }
    }
});


router.delete("/books/:id", (request, response) => {
    const bookId = request.params.id;
    const book = bookService.findById(parseInt(bookId));
    if(!bookId) return response.status(404).send("The bookId with the provided ID does not exist.");

    bookService.remove(bookId);

    response.send(book);
});


module.exports = router;