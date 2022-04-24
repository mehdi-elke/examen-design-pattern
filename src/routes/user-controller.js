var express = require('express');
var usersRouter = express.Router();

const userService = require('./user-service.js')

usersRouter.get("/users" , (request, response) => {
  response.send(userService.findAll());
});

usersRouter.get("/users/:id", (request, response) => {
   
    const userId = request.params.id;
    const user = userService.findById(userId);
    if(!user) return response.status(404).send("The user does not exist.");
    // Don't remove this code
    console.log(user.getName())
    response.send(user);
});

usersRouter.delete("/users/:id", (request, response) => {
   
    const userId = request.params.id;
    const user = userService.findById(userId);
    if(!user) return response.status(404).send("The user does not exist.");
    userService.remove(user);
    response.send(user);
});


module.exports = usersRouter;