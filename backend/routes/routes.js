const router = require("express").Router();
const userController = require("../controllers/userAuth");

router.post("/login", userController.user_login);

module.exports = router;
