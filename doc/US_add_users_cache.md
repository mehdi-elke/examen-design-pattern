## US : Add users cache
As a user
I want to access user data faster

## Acceptance criteria
Scenario 1:
Given a user
When admin get /api/users
Then retrieve data with 700ms
When admin get /api/users
Then retrieve data less than 700ms


## Technical design:
user-service access to a remote repository.
Because of this the access times are long. It is necessary to add a cache for this. 
For this we will implement a proxy-cache

## Technical books
- [ ] Create a proxy cache for user-service
- [ ] Replace usage of user-service by the proxy
- [x] Test


The test "It should return all users for each call" into users-test.js should be green after the implementation of the function.
