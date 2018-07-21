const Post = require("./post");
const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose
  .connect(
    "mongodb://khanh2003:khanh2003@ds131711.mlab.com:31711/postapi",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB failed to connect: ", err));

mongoose.Promise = global.Promise;

module.exports = Post;
