const express = require("express"),
  cors = require("cors"),
  app = express(),
  Post = require("./models"),
  // seedDB = require('./seeds');
  bodyParser = require("body-parser");

const postRouter = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Express routers
app.use("/api/posts", postRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("SERVER STARTED ON PORT ", port);
});
