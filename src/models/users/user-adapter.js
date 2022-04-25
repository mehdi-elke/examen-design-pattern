const GoogleUser = require("./google-user.js")

class UserAdapter { 

    constructor(googleUser){
        this.googleUser = googleUser;
    }

    getName(){
        return this.googleUser.firstname + " " + this.googleUser.lastname;
    }
}

module.exports = UserAdapter;