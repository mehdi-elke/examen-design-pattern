const GoogleUser = require('../models/users/google-user')

class GoogleUserAdapter{
    constructor(GoogleUser, id) {
        this.name = GoogleUser.firstname + '/' + GoogleUser.lastname;
        this.id = id;
        this.penalty = 0;
        this.books = [];
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

module.exports = GoogleUserAdapter;