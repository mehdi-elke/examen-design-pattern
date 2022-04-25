const ComicBook = require("../models/books/comic.js")
const JournalBook = require("../models/books/journal.js")
const NovelBook = require("../models/books/novel.js")

class BookFactory {
    
    create(id, name, number,author, date){
        if((number =! null) && (author != null)){
            return new ComicBook(id, name, number, author);
        } else if(date != null) {
            return new JournalBook(id, name, date, number);
        } else {
            return new NovelBook(id, name, author)
        }
    }
}

const bookFactory = new BookFactory();
Object.freeze(bookFactory);

module.exports = bookFactory;