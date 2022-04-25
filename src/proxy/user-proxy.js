const userService = require('../routes/user-service.js')

class UserProxy {
    constructor() {
        this.resultCache = userService.findAll()
    }

    findAll(){
        return this.resultCache;
    }

    findById(id){
        return this.resultCache.find(user => user.id == id);
    }

    add(user){
        this.resultCache.push(user);
        userService.add(user);
    }

    remove(user){
        const index = this.resultCache.indexOf(user);
        this.resultCache.splice(index, 1);
        userService.remove(user);
    }
}

const userProxy = new UserProxy();

module.exports = userProxy;