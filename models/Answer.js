const mongoose = require('mongoose');
const { Schema } = mongoose;

const answerSchema = new Schema({
    questionId:{
        type:Schema.Types.ObjectId,
        ref:'Question',
        required:true
    },
    username:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    } ,
    answer:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
  });

module.exports = mongoose.model('answer',answerSchema)