// -> FILE THAT HANDLES ALL ROUTING REQUESTS FOR MESSAGES

const mongoose = require('mongoose');
const Message = require('../models/messageModel');


//create a new message and insert into db
const newMessage = async (req, res) => {
    const {sender_id, title, content} = req.body;

    try {
        const message = await Message.create({sender_id, title, content});
        res.status(200).json(message);
    }
    catch (err) {
        res.status(400).json({errorMessage: "Failed to create a new Message"})
    }
}

//get all messages
const getMessages = async (req, res) => {
    const allMessages = await Message.find({}).sort({createdAt: -1});
    
    res.status(200).json(allMessages);
}


//get a message by id
const getMessage = async (req, res) => {
    const { messageID } = req.params;

    if (!mongoose.isValidObjectId(messageID)) {
        res.status(400).json({errorMessage: "Invalid ID"});
        return;
    }

    const message = Message.findById(messageID);

    if (!mongoose.isValidObjectId(messageID)) {
        res.status(404).json({errorMessage: "No such message exists"});
        return;
    }

    res.status(200).json(message);
}


//delete a message by id
const deleteMessage = async (req, res) => {
    const { messageID } = req.params;

    if (!mongoose.isValidObjectId(messageID)) {
        res.status(400).json({errorMessage: "Invalid ID"});
        return;
    }

    const message = Message.findByIdAndDelete(messageID);

    if (!mongoose.isValidObjectId(messageID)) {
        res.status(404).json({errorMessage: "No such message exists"});
        return;
    }

    res.status(200).json(message);
}


//update a message by id
const updateMessage = async (req, res) => {
    const { messageID } = req.params;

    if (!mongoose.isValidObjectId(messageID)) {
        res.status(400).json({errorMessage: "Invalid ID"});
        return;
    }

    const message = Message.findByIdAndUpdate(messageID, {
        ...req.body
    });

    if (!mongoose.isValidObjectId(messageID)) {
        res.status(404).json({errorMessage: "No such message exists"});
        return;
    }

    res.status(200).json(message);
}


module.exports = {
    getMessages,
    getMessage,
    newMessage,
    deleteMessage, 
    updateMessage
}