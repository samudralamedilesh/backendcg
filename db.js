const mongoose = require('mongoose');

const url = "mongodb+srv://samudralamedilesh:sahayamMedi@cgcluster.c5pj7mz.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = async()=>{
    await mongoose.connect(url);
    console.log("connected")

}

module.exports =  connectToMongo