const express = require("express");
const app = express();
app.get(/a/,(req,res)=>{
    res.send("This routes match with any route that contain a inside in it")
})
console.log("Twabonanye byakunze!!");