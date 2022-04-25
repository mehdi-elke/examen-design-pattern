const GoogleUser = require("../models/users/google-user")

class UserAdapter {

    constructor(googleUser){
        this.googleUser = googleUser;
        this.books = [];
        this.penalty = 0;
    }

    getName(){
        return this.googleUser.firstname + " " + this.googleUser.lastname;
    }

    getBooks(){
        return this.books;
    }

    setPenalityPoint(){
        this.penalty++;
    }
}

module.exports = UserAdapter;