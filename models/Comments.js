const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    post_id : {
      type: String
    },
    author: {
      type: String
    },
    avatar: {
      type: String
    },
    text:{
        type : String
    },
    upvotes:{
      type : Number
    },
    date: {
      type: Date,
      default:Date.now
    }
  });
  
  module.exports = Comments = mongoose.model('comment', CommentSchema);