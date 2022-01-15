const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title : {
      type: String
    },
    url: {
      type: String
    },
    author: {
      type: String
    },
    body: {
      type: String
    },
    upvotes:{
      type : Number,
      default: 0
    },
    date: {
      type: Date
    },
    display_date:{
      type : String
    }
  });
  
  module.exports = Post = mongoose.model('post', PostSchema);