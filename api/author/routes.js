const express = require("express");
const { postsCreate, fetchOne } = require("./controller");

const router = express.Router();

router.param("authorId", async (req, res, next, authorId) => {
  const author = await fetchOne(authorId, next);
  req.author = author;
  next();
});

router.post("/:authorId", postsCreate);

module.exports = router;
