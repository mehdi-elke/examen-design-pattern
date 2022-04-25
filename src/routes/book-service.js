
const User = require('../routes/user-service.js');
const Comic = require('../models/books/comic.js');
const Journal = require('../models/books/journal.js');
const Novel = require('../models/books/novel.js');

class BookService {

    static numberOfInstantiation = 0;

    constructor(){
        this.books = [];
        this.books.push(new Comic(1,"Amazing Spider-Man", 1, "Stan Lee"));
        this.books.push(new Comic(2,"Amazing Spider-Man", 2, "Stan Lee"));
        this.books.push(new Comic(3,"Amazing Spider-Man", 3, "Stan Lee"));
        this.books.push(new Novel(4,"Cujo", "Stephen King"));
        // This static value is used for checking the number of instantiation of the class BookService
        // Don't remove these lines of code !!!
        BookService.numberOfInstantiation = BookService.numberOfInstantiation + 1;
    }

    findAll(){
        return this.books;
    }

    findById(id){
       return this.books.find(book => book.id == id);
    }


    add(book){
        this.books.push(book);
    }

    remove(book){
        const index = this.books.indexOf(book);
        this.books.splice(index, 1);
    }

    update(book){
        const index = this.books.findIndex(oldBook => oldBook.id == book.id);
        this.books.splice(index, 1);
        this.books.push(book);
    }
}
   
const bookService = new BookService();
   
module.exports = bookService;