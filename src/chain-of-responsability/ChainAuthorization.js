class ChainAuthorization {
    constructor(req) {
        this.req = req;
    }

    setNextVerif(nextVerif){}
}

class AuthorizationApiKey extends ChainAuthorization{
    constructor(req) {
        super(req);
        this.nextVerif = new ChainAuthorization();
    }

    setNextVerif(nextVerif){
        this.nextVerif = nextVerif;
    }

    verification(){
        return JSON.stringify(this.req.headers['x-api-key']) === '123'
    }
}

class AuthorizationHeader extends ChainAuthorization{
    constructor(req) {
        super(req);
        this.nextVerif = new ChainAuthorization();
    }

    setNextVerif(nextVerif){
        this.nextVerif = nextVerif;
    }

    verification(){
        return atob(JSON.stringify(this.req.headers['Authorization'])) === 'user:password'
    }
}