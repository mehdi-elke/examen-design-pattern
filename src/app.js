const express = require('express');
const app = express();

const bookRouter = require('./routes/book-controller.js');
const userRouter = require('./routes/user-controller.js');
const auth = require("./auth/auth.js");

app.use(express.json());

app.use(function(req, res, next) {
    if(auth.isAuthorized(req)){
        next();
        return;
    }
});

app.use('/api', bookRouter);
app.use('/api', userRouter);


const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`));
