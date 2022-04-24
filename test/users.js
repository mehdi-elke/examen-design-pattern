let server = require("../src/app");
let chai = require("chai");
let chaiHttp = require("chai-http");


chai.should();
chai.use(chaiHttp); 

describe('Users APIs', () => {

    describe("Test GET route /api/users", () => {
        it("It should return all users", (done) => {
            chai.request(server)
                .get("/api/users")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.not.be.eq(0);
                done();
                });
        });

        it("It should return all users for each call", (done) => {
            chai.request(server)
                .get("/api/users")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.not.be.eq(0);
                });

            chai.request(server)
                .get("/api/users")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.not.be.eq(0);
                });

            chai.request(server)
                .get("/api/users")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.not.be.eq(0);
                    done();
                });
        });

        it("It should default user information", (done) => {
            chai.request(server)
                .get("/api/users/1")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.have.property('id').eq(1);
                    response.body.should.have.property('name').eq('name1');
                    done();
                });
        });

        it("It should google user information", (done) => {
            chai.request(server)
                .get("/api/users/4")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.have.property('id').eq(4);
                    response.body.should.have.property('name').eq('firstname1/lastname1');
                    done();
                });
        });
    });

});