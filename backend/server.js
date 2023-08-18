// -> MAIN NODE.JS SERVER

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const messagesRouter = require('./routes/messagesRouter');
const userRouter = require('./routes/usersRouter');
const authRouter = require('./routes/authRouter');
const requireAuth = require('./middleware/requireAuth')

//app object that runs the server
const app = express();

//parse incoming requests into JSON
app.use(express.json());

//check if authorized token is provided
app.use(requireAuth)

//default path being /messages
app.get('/', (req, res) => res.redirect('/messages'));

//use messages router for /messages
app.use('/messages', messagesRouter);

//use user router for /user
app.use('/user', userRouter);

//use auth router for /auth
app.use('/auth', authRouter);

//connect to db and start listening for HTTP requests
mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
        app.listen(process.env.PORT);
        console.log('connected and listening')
    })
    .catch((err) => console.log(err));