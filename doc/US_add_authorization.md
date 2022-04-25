## US : Add authorization
As a user
I want to access securized resources
to protected data

## Acceptance criteria
Scenario 1:
Given an authorized admin
When admin get /api/books/1
Then retrieve data 

Scenario 2:
Given an authorized application with x-api-key 
When get /api/books/1
Then retrieve data

Scenario 3:
Given an non authorized user1
When Jean get /api/books/1
Then retrieve error 500 

Scenario 4:
Given an non authorized application with x-api-key 
When get /api/books/1
Then retrieve error 500 

## Technical design:
It's necessary to chain all calls, because we will integrate multi thirds parties, and It' could be a big ball of mud without this chain of responsability. 

## Technical books
- [x] Create authentication interceptor
- [ ] Throws error if user and x-api-key not valid
- [ ] Check user, only admin, admin1 and admin 2 are authorized
- [ ] Check authorization header, the value is encoded into base64, only user and password are authorized user:password
- [ ] Check x-api-key,  only x-api-key 123 is authorized
- [ ] Chain checks
- [x] Test


The test suite "Test security connection" into integration-test.js should be green after the implementation of the function.
