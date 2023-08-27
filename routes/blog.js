const express = require("express");

const Blog = require("../models/Blog");
const router = express.Router();

router.post("/uploadblog",async(req,res)=>{
    try{
        const {username, blog} = req.body;
        console.log(username,blog);
        await Blog.create({username,blog})
        return res.status(200).send({success:true,username,blog})
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
    
})

router.get("/getblogs",async(req,res)=>{
    try { 
        const output = await Blog.find()
        return res.status(200).send({output})
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
})

module.exports = router;
