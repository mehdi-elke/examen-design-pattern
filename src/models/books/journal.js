const Book = require("./book.js")

class Journal extends Book {

    constructor(id, name, number, date){
        super(id, name, false);
        this.number = number;
        this.date = date;
    }

}

module.exports = Journal;