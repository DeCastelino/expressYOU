const router = require("express").Router();
const userController = require("../controllers/userAuth");
const postController = require("../controllers/posts");
const { upload } = require("../middleware/multer");

// GET ROUTES
router.get("/posts", postController.get_all_posts);
router.get("/post/:id", postController.get_post_by_id);

// POST ROUTES
router.post("/login", userController.user_login);
router.post("/register", userController.user_register);
router.post("/upload", upload.single("file"), postController.upload_image);
router.post("/createPost", postController.create_post);
router.post("/post/:id", postController.update_post);

// DELETE ROUTES
router.delete("/post/:id", postController.delete_post);

module.exports = router;
