
const Userproxy = require("./user-proxy.js")
const User = require("../models/users/user");
const UserAdapter = require("../adapter/adapter");
const GoogleUser = require("../models/users/google-user");
class UserService {

    constructor(){
        this.users = [];
    }

    findAll(){
        // In order to simulate external service call
        sleep(700);
        return Userproxy.findAll();
    }

    findById(id){
        Userproxy.findById(id)
    }

    add(user){
        Userproxy.add(user);
    }

    remove(user){
        Userproxy.remove(user);
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