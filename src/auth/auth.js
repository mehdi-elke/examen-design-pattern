
class Auth {

    // It's only used for implement a chain of responsability
    // don't use this code in production, it isn't safe !!!
    constructor(){
        this.nextHandler = null;
    }

    isAuthorized(request){
       return true;
    }
}



const auth = new Auth();
module.exports = auth;