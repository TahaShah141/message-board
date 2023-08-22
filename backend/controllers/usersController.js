// -> FILE THAT HANDLES ALL ROUTING REQUESTS FOR USERS

const mongoose = require('mongoose');
const User = require('../models/userModel');

//get a message by id
const getUser = async (req, res) => {
    const { userID } = req.params;

    if (!mongoose.isValidObjectId(userID)) {
        return res.status(400).json({error: "Invalid ID"});
    }

    const user = User.findById(userID);

    if (!mongoose.isValidObjectId(userID)) {
        return res.status(404).json({error: "No such user exists"});
    }

    res.status(200).json(user);
}


//delete a user by id
const deleteUser = async (req, res) => {
    const { userID } = req.params;

    if (!mongoose.isValidObjectId(userID)) {
        return res.status(400).json({error: "Invalid ID"});
    }

    const user = User.findByIdAndDelete(userID);

    if (!mongoose.isValidObjectId(userID)) {
        return res.status(404).json({error: "No such user exists"});
    }

    res.status(200).json(user);
}


//update a message by id
const updateUser = async (req, res) => {
    const { userID } = req.params;

    if (!mongoose.isValidObjectId(userID)) {
        return res.status(400).json({error: "Invalid ID"});
    }

    const user = User.findByIdAndUpdate(userID, {
        ...req.body
    });

    if (!mongoose.isValidObjectId(userID)) {
        return res.status(404).json({error: "No such user exists"});
    }

    res.status(200).json(user);
}


module.exports = {
    getUser,
    deleteUser,
    updateUser
}