const express = require('express'),
    cors = require('cors');
    app = express(),
    Post = require('./models'),
    // seedDB = require('./seeds');
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//ROUTE '/' - METHOD: GET, GET ALL POSTS
app.get('/posts', function(req, res){
    Post.find({}, (err, allPosts) => {
        if(err){
            res.send(err);
        } else {
            res.json(allPosts);
        }
    })
});

//ROUTE '/posts' - METHOD: POST, POST NEW POST TO POST LIST
app.post('/posts', function(req, res){
    const newPost = req.body;
    console.log(newPost);
    Post.create(newPost, err => {
        if(err){
            res.send(err);
        } else {
            res.redirect('/posts');
        }
    })
})

//ROUTE 'posts/:id' - METHOD: GET, GET SELECTED POST BY ID
app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    Post.findById(id, (err, foundPost) => {
        if(err){
            res.send(err);
        } else {
            res.json(foundPost);
        }
    })
})

//ROUTE  'posts/:id' - METHOD: DELETE, DELETE SELECTED POST BY ID
app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    Post.findByIdAndRemove(id, (err, posts) => {
        if(err){
            res.send(err);
        } else {
            res.json(posts);
        }
    })
})

//ROUTE 'posts/:id' - METHOD: PUT, FIND AND UPDATED SELECTED POST BY ID
app.put('/posts/:id', (req, res) => {
    const id = req.params.id;
    const selectedPost = req.body;
    Post.findByIdAndUpdate(id, selectedPost, {new: true}, (err, posts) => {
        if(err){
            err.send(err);
        } else {
            res.json(posts);
        }
    })
})
app.listen(process.env.PORT || 8080, () => {
    console.log('SERVER STARTED');
});