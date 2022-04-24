## US : Manage google users
As a user
I want to create users from google account

## Acceptance criteria
Scenario 1:
Given a user
When admin get /api/users/4
Then retrieve data 


## Technical design:
user-service load some user from their "google account". The data structure is little bit different. It's necessary to create an adapter in order to define the same method for this type of user. 

## Technical books
- [ ] Create an adapter for google-user
- [ ] Replace usage of google-user by the adapter
- [x] Test


The test "It should google user information" into users-test.js should be green after the implementation of the function.
