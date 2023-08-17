// -> FILE CONTAINING THE SCHEMA FOR A USER

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for a user that posts messages
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });


module.exports = mongoose.model("User", UserSchema);
