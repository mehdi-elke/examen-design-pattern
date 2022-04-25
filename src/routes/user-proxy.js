const UserAdapter = require("../adapter/adapter.js");
const GoogleUser = require("../models/users/google-user.js");
const User = require('../models/users/user.js');
const userService = require('./user-service.js');


class UserServiceProxy {

    constructor(){
        this.users = [];
    }

    findAll(){
        if(this.users.length === 0){
            console.log("add to cache")
            this.users = userService.findAll();
        }
        return this.users;
    }

    findById(id){
        return this.users.find(user => user.getId() === id);
    }

    add(user){
        this.users.push(user);
        userService.add(user);
    }

    remove(user){
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
        userService.users.splice(index, 1)
    }


}


const userServiceProxy = new UserServiceProxy();

module.exports = userServiceProxy;