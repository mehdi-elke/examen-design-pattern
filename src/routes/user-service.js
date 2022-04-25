
const Userproxy = require("./user-proxy.js")
const User = require("../models/users/user");
const UserAdapter = require("../adapter/adapter");
const GoogleUser = require("../models/users/google-user");
class UserService {

    constructor(){
        this.users = [];
        this.users.push(new User(1,"name1",[2,3]));
        this.users.push(new User(2,"name2",[]));
        this.users.push(new User(3,"name3",[1]));
        this.users.push(new UserAdapter(new GoogleUser("firstname1","lastname1")));
        this.users.push(new UserAdapter(new GoogleUser("firstname2","lastname2")));
        this.users.push(new UserAdapter(new GoogleUser("firstname3","lastname3")));
    }

    findAll(){
        // In order to simulate external service call
        sleep(700);
        return this.users;
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