const user_login = (req, res) => {
    console.log("User logged in successfully - Express");
    // res.sendStatus(200);
    console.log(req.body);
    res.status(200).json({
        username: req.body.username,
        password: req.body.password,
    });
};

module.exports = {
    user_login,
};
