var express = require('express');
var usersRouter = express.Router();

const userProxy = require('./user-proxy.js')
usersRouter.use((req, res, next) => {
    if(!req.headers.x_api_key || req.headers.x_api_key !== "123"){
        res.send(500)
    }else{
        next();
    }
})
usersRouter.get("/users" , (request, response) => {
  response.send(userProxy.findAll());
});

usersRouter.get("/users/:id", (request, response) => {
   
    const userId = request.params.id;
    const user = userProxy.findById(userId);
    if(!user) return response.status(404).send("The user does not exist.");
    // Don't remove this code
    console.log(user.getName())
    response.send(user);
});

usersRouter.delete("/users/:id", (request, response) => {
   
    const userId = request.params.id;
    const user = userProxy.findById(userId);
    if(!user) return response.status(404).send("The user does not exist.");
    userProxy.remove(user);
    response.send(user);
});


module.exports = usersRouter;