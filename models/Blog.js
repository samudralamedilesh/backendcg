const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    username:{
        type:String,
        required:true
    }, 
    blog:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
  });

module.exports = mongoose.model('blog',blogSchema)