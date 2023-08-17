// -> FILE THAT HANDLES ALL THE ROUTES STARTING WITH '/users'

const express = require("express");

//controller functions for users api
const {
    newUser,
    getUser,
    deleteUser,
    updateUser
} = require("../controllers/usersController");

//initializing the router
const router = express.Router();

//post a new user
router.post('/new', newUser);

//get a user by id
router.get('/user/:id', getUser);

//delete a user by id
router.delete('/user/:id', deleteUser);

//edit/update a User by id
router.patch('/user/:id', updateUser);

module.exports = router