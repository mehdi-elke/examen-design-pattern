## US : Add new books
As a user
I want to add new book in order to manage books

## Acceptance criteria
Scenario 1:
Given information for novel
When admin post /api/books
Then data is created 

Scenario 2:
Given information for comic
When admin post /api/books
Then data is created 

Scenario 3:
Given information for journal
When admin post /api/books
Then data is created 
 

## Technical design:
Add  

## Technical books
- [x] Create book, comic and novels models
- [ ] Expose endpoint for the creation (POST in /v1/api/books)
- [ ] Create a factory
- [x] Test


The test suite "POST /api/books" into books.js should be green after the implementation of the function.
