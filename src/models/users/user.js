class User { 

    constructor(id, name, books){
        this.id = id;
        this.name = name;
        this.books = books;
        this.penalty = 0;
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

    setPenalityPoint(){
        this.penalty++;
    }
}

module.exports = User;