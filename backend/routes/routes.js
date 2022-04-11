const router = require("express").Router();
const userController = require("../controllers/userAuth");

// GET ROUTES

// POST ROUTES
router.post("/login", userController.user_login);
router.post("/register", userController.user_register);

// DELETE ROUTES

module.exports = router;
