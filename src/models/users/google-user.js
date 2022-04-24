class GoogleUser { 

    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getLastName(){
        return this.lastname;
    }

    getFirstName(){
        return this.firstname;
    }
}

module.exports = GoogleUser;