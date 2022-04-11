const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        index: { unique: true },
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        index: { unique: true },
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: String,
    gender: String,
    birthDate: String,
    phoneNumber: Number,
});

module.exports = mongoose.model("User", userSchema);
