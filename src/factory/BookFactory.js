const bookService = require('../routes/book-service.js');
const Comic = require('../models/books/comic.js');
const Journal = require('../models/books/journal.js');
const Novel = require('../models/books/novel.js');
const Book = require("../models/books/book");

class BookFactory {
    create(name, author, number, date){
        const books = bookService.findAll();

        let book;

        if(author && number){
            book = new Comic(books.length + 1, name, number, author)
        } else if (number && date){
            book = new Journal(books.length + 1, name, number, date)
        } else if (author) {
            book = new Novel(books.length + 1, name, author)
        } else {
            book = new Book(books.length + 1, name, false)
        }
        return book;
    }
}

const bookFactory = new BookFactory();

module.exports = bookFactory;