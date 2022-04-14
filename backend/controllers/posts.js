const Post = require("../models/Post");

const get_all_posts = async (req, res) => {
    const postList = await Post.find().sort({ updatedAt: "desc" });
    res.status(200).json(postList);
};

const get_post_by_id = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
};

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

const update_post = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        res.status(200).json(updatedPost);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};

const delete_post = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        await post.remove();
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
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
    update_post,
    delete_post,
};
