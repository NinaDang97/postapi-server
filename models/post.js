//id, title, category, content, create_date

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: 'Title is invalid'
    },
    category: {
        type: String, 
        required: 'Category is invalid'
    },
    content: {
        type: String,
        minlength: 100
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
