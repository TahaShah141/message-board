// -> MAIN NODE.JS SERVER

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const messagesRouter = require('./routes/messagesRouter');

const app = express();

//default path being /messages
app.get('/', (req, res) => res.redirect('/messages'));

//use messages router
app.use('/messages', messagesRouter);

//connect to db and start listening for HTTP requests
mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
        app.listen(process.env.PORT);
        console.log('connected and listening')
    })
    .catch((err) => console.log(err));