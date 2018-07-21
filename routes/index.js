const express = require("express");
const router = express.Router();
const Post = require("../models");

//ROUTE '/' - METHOD: GET, GET ALL POSTS
router.get("/", function(req, res) {
  Post.find({}, (err, allPosts) => {
    if (err) {
      res.send(err);
    } else {
      res.json(allPosts);
    }
  });
});

//ROUTE '/posts' - METHOD: POST, POST NEW POST TO POST LIST
router.post("/", function(req, res) {
  const newPost = req.body;
  Post.create(newPost, err => {
    if (err) {
      res.send(err);
    } else {
      res.json(newPost);
    }
  });
});

//ROUTE 'posts/:id' - METHOD: GET, GET SELECTED POST BY ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Post.findById(id, (err, foundPost) => {
    if (err) {
      res.send(err);
    } else {
      res.json(foundPost);
    }
  });
});

//ROUTE  'posts/:id' - METHOD: DELETE, DELETE SELECTED POST BY ID
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Post.findByIdAndRemove(id, (err, posts) => {
    if (err) {
      res.send(err);
    } else {
      res.json(posts);
    }
  });
});

//ROUTE 'posts/:id' - METHOD: PUT, FIND AND UPDATED SELECTED POST BY ID
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const selectedPost = req.body;
  Post.findByIdAndUpdate(id, selectedPost, { new: true }, (err, posts) => {
    if (err) {
      err.send(err);
    } else {
      res.json(posts);
    }
  });
});

module.exports = router;
