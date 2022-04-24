const Book = require("./book.js")

class Novel extends Book {

    constructor(id, name, author){
        super(id, name, false);
        this.author = author;
    }

}

module.exports = Novel;