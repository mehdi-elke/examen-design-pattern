const Book = require("./book.js")

class Comic extends Book {

    constructor(id, name, number, author){
        super(id, name, false);
        this.number = number;
        this.author = author;
    }
}

module.exports = Comic;