## US : Add users cache
As an admin
I want to add a penalty to the user if the book is damaged 

## Acceptance criteria
Scenario 1:
Given the user3 returns the book1 and is damaged
When admin patch /api/books/1 damaged to true
And get /api/users/3
Then penality is equal to 1

## Technical design:
user-service access to a remote repository.
Because of this the access times are long. It is necessary to add a cache for this. 
For this we will implement a proxy-cache

## Technical books
- [ ] Add PATCH endpoint in order to set damaged to true
- [ ] Notify user-service if the book is damaged
- [ ] Add penalty( +1) for the user
- [ ] test


The test "PATCH /api/books/:id" should be green after the PATCH step.
You need to write some tests.