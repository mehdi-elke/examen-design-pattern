let server = require("../src/app");
let chai = require("chai");
let chaiHttp = require("chai-http");


chai.should();
chai.use(chaiHttp); 

describe('book APIs', () => {

    describe("Test GET route /api/books", () => {
        it("It should return all books", (done) => {
            chai.request(server)
                .get("/api/books")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.not.be.eq(0);
                done();
                });
        });
 
        it("It should NOT return all the books", (done) => {
            chai.request(server)
                .get("/api/book")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });

    });

    describe("GET /api/books/:id", () => {
        it("It should GET a book by ID", (done) => {
            const bookId = 1;
            chai.request(server)                
                .get("/api/books/" + bookId)
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id');
                    response.body.should.have.property('name');
                    response.body.should.have.property('damaged');
                    response.body.should.have.property('id').eq(1);
                done();
                });
        });

        it("It should NOT GET a book by ID", (done) => {
            const bookId = 123;
            chai.request(server)                
                .get("/api/books/" + bookId)
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(404);
                    response.text.should.be.eq("The book with the provided ID does not exist.");
                done();
                });
        });

    });
    

    /**
     * Test the POST route
     */
    describe("POST /api/books", () => {
        it("It should POST a new novel", (done) => {
            const novel = {
                name: "Bazaar",
                author: "Stephen King"

            };
            chai.request(server)                
                .post("/api/books")
                .send(novel)
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(5);
                    response.body.should.have.property('name').eq('Bazaar');
                    response.body.should.have.property('author').eq('Stephen King');
                done();
                });
        });

        it("It should POST a new comic", (done) => {
            const comic = {
                name: "Amazing Spider-Man",
                author: "Stan Lee",
                number: 4

            };
            chai.request(server)                
                .post("/api/books")
                .send(comic)
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(6);
                    response.body.should.have.property('name').eq('Amazing Spider-Man');
                    response.body.should.have.property('author').eq('Stan Lee');
                    response.body.should.have.property('number').eq(4);
                done();
                });
        });

        it("It should POST a new journal", (done) => {
            const magazine = {
                name: "Kaizen Magazine",
                number: 1,
                date: new Date('2022-03-01')

            };
            chai.request(server)                
                .post("/api/books")
                .send(magazine)
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(7);
                    response.body.should.have.property('name').eq('Kaizen Magazine');
                    response.body.should.have.property('number').eq(1);
                done();
                });
        });

    });


    describe("PATCH /api/books/:id", () => {
        it("It should PATCH an existing book", (done) => {
            const bookId = 1;
            const book = {
                damaged: true
            };
            chai.request(server)                
                .patch("/api/books/" + bookId)
                .set("x-api-key", "123")
                .send(book)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(1);
                    response.body.should.have.property('name').eq("Amazing Spider-Man");
                    response.body.should.have.property('damaged').eq(true);
                done();
                });
        });       
    });
})