// -> FILE THAT HANDLES ALL THE ROUTES STARTING WITH '/users'

const express = require("express");

//controller functions for users api
const {
    getUser,
    deleteUser,
    updateUser
} = require("../controllers/usersController");

//initializing the router
const router = express.Router();

//get a user by id
router.get('/:id', getUser);

//delete a user by id
router.delete('/:id', deleteUser);

//edit/update a User by id
router.patch('/:id', updateUser);

module.exports = router