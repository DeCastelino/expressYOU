const router = require("express").Router();
const userController = require("../controllers/userAuth");
const postController = require("../controllers/posts");
const { upload } = require("../middleware/multer");

// GET ROUTES

// POST ROUTES
router.post("/login", userController.user_login);
router.post("/register", userController.user_register);
router.post("/createPost", upload.single("file"), postController.create_post);

// DELETE ROUTES

module.exports = router;
