const Post = require("../models/Post");

const get_all_posts = async (req, res) => {
    const postList = await Post.find();
    res.status(200).json(postList);
};

const get_post_by_id = (req, res) => {};

const create_post = async (req, res) => {
    try {
        const post = new Post(req.body);
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch (err) {
        console.log(err);
        res.send(500);
    }
};

const upload_image = (req, res) => {
    res.sendStatus(200);
};

module.exports = {
    get_all_posts,
    create_post,
    upload_image,
    get_post_by_id,
};
