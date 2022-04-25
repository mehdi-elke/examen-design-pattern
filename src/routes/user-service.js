
const GoogleUser = require("../models/users/google-user.js");
const User = require('../models/users/user.js');
const GoogleUserAdapter = require('../adapter/google-user-adapter.js');

class UserService {

    constructor(){
        this.users = [];
        this.users.push(new User(1,"name1",[2,3]));
        this.users.push(new User(2,"name2",[]));
        this.users.push(new User(3,"name3",[1]));
        this.users.push(new GoogleUserAdapter(new GoogleUser('firstname1', 'lastname1'), 4));
        this.users.push(new GoogleUserAdapter(new GoogleUser('firstname2', 'lastname2'), 5));
        this.users.push(new GoogleUserAdapter(new GoogleUser('firstname3', 'lastname3'), 6));
    }

    findAll(){
        // In order to simulate external service call
        sleep(700);
        console.log(this.users.length)
        return this.users;
    }

    findById(id){
        return this.users.find(user => user.getId() == id);
    }

    add(user){
        this.users.push(user);
    }

    remove(user){
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
    }
    
}

// This method is only used for simulate a slow method call.
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

const userService = new UserService();
   
module.exports = userService;