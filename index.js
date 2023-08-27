const connectToMongo = require('./db');

connectToMongo();

var express = require('express');
var cors = require('cors')
var app = express()
 
app.use(cors())

app.use(express.json())

const port = 5000;

app.use('/api/auth',require('./routes/auth'))
app.use('/api/question',require('./routes/question')) 
app.use('/api/blog',require('./routes/blog'))
app.use('/api/answer',require('./routes/answer'))
app.use('/api/count',require('./routes/count'))

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})