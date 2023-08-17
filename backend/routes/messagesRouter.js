const { 
    get_messages_all
} = require("../controllers/messagesController");


const express = require("express");

const router = express.Router();


router.get('/', get_messages_all);


module.exports = router