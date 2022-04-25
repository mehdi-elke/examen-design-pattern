var express = require('express');
var router = express.Router();

const utils = require('../utils/book-schema.js');
const bookService = require('./book-service.js');
const BookFactory = require("../factories/book-factory.js")


const books = [
    {
        id: 5,
        name: "Bazaar",
        author: "Stephen King"
    },
    {
        id: 6,
        name: "Amazing Spider-Man",
        author: "Stan Lee",
        number: 4
    },
    {
        id: 7,
        name: "Kaizen Magazine",
        number: 1,
        date: new Date('2022-03-01')
    }
];


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
    const { error } = utils.validatebook(request.body);

    if(error) return response.status(400).send("Necessary information is not provided")

    try {
        const book = BookFactory.create(books.length + 1,request.body.name, request.body.number, request.body.author, request.body.date);
        console.log(book);
        bookService.add(book);
        response.status(201).send(book);

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