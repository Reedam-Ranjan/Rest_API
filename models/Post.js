const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    // required : true
    default: Date.now,
  },
});

module.exports = mongoose.model("Posts", PostSchema);

// Example of a user schema

// mongoose.Schema({
//     username : String,
//     password : String,
//     user
// })
