const User = require("../models/User");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

// LOGIN
const user_login = (req, res) => {};

// REGISTER
const user_register = (req, res) => {
    try {
        // Hashing Password
        bcrypt.hash(req.body.password, SALT_WORK_FACTOR, (err, hash) => {
            if (err) return res.status(500).json({ error: err });

            // Creating User
            const user = new User({
                firstName: req.body.firstName,
                surname: req.body.surname,
                username: req.body.username,
                email: req.body.email,
                password: hash,
                profilePicture: req.body.profilePicture,
                birthDate: req.body.birthDate,
                gender: req.body.gender,
                phoneNumber: req.body.phoneNumber,
            });
            user.save();
            res.sendStatus(200);
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};

module.exports = {
    user_login,
    user_register,
};
