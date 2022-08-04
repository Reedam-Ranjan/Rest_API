// Importing express again
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Older approach used in the tutorial

// router.get("/",  (req, res) => {
//   res.send("We are on posts");
// });

// (GETS BACK ALL THE POSTS) improvised technique
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// CREATE A POST

router.post("/", async (req, res) => {
  // console.log(req.body,'body');f
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  // console.log(req.body);

  // This code section was debugged by kartik

  // post.save((err,data)=>{
  //   console.error(err);
  //   // throw err
  //   console.log(data);
  // })

  // Improved approach using async , await ()
    try {
    const savedPost = await post.save();
    res.json(savedPost);
    } catch (err) {
    res.json({ message: err });
    }

  // This piece of code was explained in the tutorial

  // post.save()
  // // .exec()
  // .then(data =>{
  //     res.json(data);
  // })
  // .catch(err => {
  //   console.error(err);
  //     res.json({message: err})
  // });
});

//   router.get("/specific", (req, res) => {
//     res.send("Specific Posts");
//   });



// SPECIFIC POST (READ A POST)
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
  // console.log(req.params.postId);
});



// DELETE POSTS
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId }); // Only one underscore
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
  // console.log(req.params.postId);
});



// UPDATE POST
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
  // console.log(req.params.postId);
});


// To export the post.js
module.exports = router;
