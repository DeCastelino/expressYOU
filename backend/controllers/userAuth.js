const User = require("../models/User");

// LOGIN
const user_login = (req, res) => {};

// REGISTER
const user_register = (req, res) => {
    try {
        const user = new User({
            firstname: req.body.firstname,
            surname: req.body.surname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            profilePicture: req.body.profilePicture,
            birthDate: req.body.birthDate,
            gender: req.body.gender,
            phoneNumber: req.body.phoneNumber,
        });
        user.save();
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};

module.exports = {
    user_login,
    user_register,
};
