class User { 

    constructor(id, name, books){
        this.id = id;
        this.name = name;
        this.books = books;
        this.penalty = 0;
        times(700)
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getBooks(){
        return this.books;
    }
}

function times(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


module.exports = User;