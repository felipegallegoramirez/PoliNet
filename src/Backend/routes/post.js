const express = require("express");
const router = express.Router();
const post = require("../controllers/post.controller")

router.get("/", post.getPosts);
router.post("/", post.createPost); 
router.get("/:id", post.getPost); 
router.delete("/:id", post.deletePost);


module.exports = router 