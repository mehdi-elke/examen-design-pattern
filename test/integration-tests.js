let server = require("../src/app");
let chai = require("chai");
let chaiHttp = require("chai-http");


chai.should();
chai.use(chaiHttp); 

describe('Integration testing', () => {

    describe("Test add penalty if book is damaged", () => {
        it("It should add penalty if book is damaged", (done) => {
           
            const book = {
                damaged: true
            };

            chai.request(server)
                 .get("/api/users/3")
                 .set("x-api-key", "123")
                 .end((err, response) => {
                response.body.should.have.property('penalty').eq(0);
            });

            chai.request(server)
                .patch("/api/book/1")
                .set("x-api-key", "123")
                .send(book)
                .end((err, response) => {
                    response.should.have.status(200);
                });

            chai.request(server)
                .get("/api/users/3")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.body.should.have.property('penalty').eq(1);
                done();
            });
        });
    });

    describe("Test security connection", () => {
        it("It should get book when user is authorized", (done) => {
            chai.request(server)                
            .get("/api/books/1")
            .set("Authorization", "dXNlcjpwYXNzd29yZA")
            .end((err, response) => {
                response.should.have.status(200);
                done();
            });
        });
        it("It should get book when x-api-key is authorized", (done) => {
            chai.request(server)                
            .get("/api/books/1")
            .set("x-api-key", "123")
            .end((err, response) => {
                response.should.have.status(200);
                done();
            });
        });
        it("It should receive exception when x-api-key is invalid", (done) => {
            chai.request(server)                
            .get("/api/books/1")
            .set("x-api-key", "invalid_key")
            .end((err, response) => {
                response.should.have.status(500);
                done();
            });
        });
        it("It should receive exception when user information is invalid", (done) => {
            chai.request(server)                
            .get("/api/books/1")
            .set("Authorization", "dXNlcjp3cm9uZ19wYXNzd29yZA")
            .end((err, response) => {
                response.should.have.status(500);
                done();
            });
        });
    });
});