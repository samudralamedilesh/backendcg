const mongoose = require('mongoose');
const { Schema } = mongoose;



const questionSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    } ,
    question:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
  });

module.exports = mongoose.model('question',questionSchema)