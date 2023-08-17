// -> FILE THAT HANDLES ALL THE ROUTES STARTING WITH '/messages'

const express = require("express");

//controller functions for messages api
const {
    getMessages,
    getMessage,
    newMessage,
    deleteMessage, 
    updateMessage
} = require("../controllers/messagesController");

//initializing the router
const router = express.Router();

//get all messages
router.get('/', getMessages);

//post a new message
router.post('/', newMessage);

//get a message by id
router.get('/message/:id', getMessage);

//delete a message by id
router.delete('/message/:id', deleteMessage);

//edit/update a message by id
router.patch('/message/:id', updateMessage);

module.exports = router