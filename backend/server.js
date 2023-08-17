const messagesRouter = require('./routes/messagesRouter');

require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (req, res) => res.redirect('/messages'));

app.use('/messages', messagesRouter);

app.listen(process.env.PORT);