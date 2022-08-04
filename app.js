// This is going to be an end to end tutorial for writing a rest APIs.

// Importing the package
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv/config');

//Executing the package
const app = express();

// Import Routes as middleware
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


// Middlewares : functions that are executed when the routes are being hit the api 
// app.use('/posts', ()=>{
//     console.log("This is a middleware function running ");
// })

// Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Connect to DB
// This code was improved by kartik , p.s the original code was throwing some internal connection error
mongoose.connect(
   process.env.DB_CONNECTION,
  {useNewUrlParser: true,},
  (err) => {if(err) console.error(err);else console.log("connected to DB")}
);

// How to start listening to your server
app.listen(3000);
