const express = require("express");
const router = express.Router();
const post = require("../controllers/post.controller")
const { uploadimage, filemodify } = require("../utils/savestorage")


router.get("/", post.getPosts);
router.post("/", uploadimage.single("image"), post.createPost); 
router.get("/unique/:id", post.getPost); 
router.put("/:id", post.putPost);
router.delete("/:id", post.deletePost);
router.get("/postsByUser/:id", post.getPostsByUser);

module.exports = router 