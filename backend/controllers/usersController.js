// -> FILE THAT HANDLES ALL ROUTING REQUESTS FOR USERS

const mongoose = require('mongoose');
const User = require('../models/userModel');

//create a new user and insert into db
const newUser = async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await User.create({username, password});
        res.status(200).json(user);
    }
    catch (err) {
        res.status(400).json({errorMessage: "Failed to create a new User"})
    }
}

//get a message by id
const getUser = async (req, res) => {
    const { userID } = req.params;

    if (!mongoose.isValidObjectId(userID)) {
        res.status(400).json({errorMessage: "Invalid ID"});
        return;
    }

    const user = User.findById(userID);

    if (!mongoose.isValidObjectId(userID)) {
        res.status(404).json({errorMessage: "No such user exists"});
        return;
    }

    res.status(200).json(user);
}


//delete a user by id
const deleteUser = async (req, res) => {
    const { userID } = req.params;

    if (!mongoose.isValidObjectId(userID)) {
        res.status(400).json({errorMessage: "Invalid ID"});
        return;
    }

    const user = User.findByIdAndDelete(userID);

    if (!mongoose.isValidObjectId(userID)) {
        res.status(404).json({errorMessage: "No such user exists"});
        return;
    }

    res.status(200).json(user);
}


//update a message by id
const updateUser = async (req, res) => {
    const { userID } = req.params;

    if (!mongoose.isValidObjectId(userID)) {
        res.status(400).json({errorMessage: "Invalid ID"});
        return;
    }

    const user = User.findByIdAndUpdate(userID, {
        ...req.body
    });

    if (!mongoose.isValidObjectId(userID)) {
        res.status(404).json({errorMessage: "No such user exists"});
        return;
    }

    res.status(200).json(user);
}


module.exports = {
    newUser,
    getUser,
    deleteUser,
    updateUser
}