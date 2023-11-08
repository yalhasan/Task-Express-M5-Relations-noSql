const Author = require("../../models/Author");
const Post = require("../../models/Post");

exports.postsCreate = async (req, res, next) => {
  try {
    req.body.author = req.author._id;
    const newPost = await Post.create(req.body);
    Post.push(newPost);
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

exports.fetchOne = async (id, next) => {
  try {
    const author = await Author.findById(id);
    if (!author) return next({ msg: "author not found" });
    return author;
  } catch (error) {
    next(error);
  }
};
