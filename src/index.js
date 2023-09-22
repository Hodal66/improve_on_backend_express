const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
require('colors');

app.get("/", (req, res) => {
  res.send("This is___________ the home page of the project");
});
app.get("/user", (req, res) => {
  res.send("We will back to you as soon as possible don't worry about that!!");
});

// app.use("/static",express.static('public'));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use('/other',express.static(path.join(__dirname,('js'))));
//We can use all as method that can accept all other methods
app.all("/secret", (req, res, next) => {
  res.send(
    "Now we can accept all Methods mean GET,POST,PUT,DELETE can work no problem"
  );
  next();
});

app.get('/ab+cd',(req,res)=>{
  res.send("This is the second way to display routing");

})
app.get(/a/,(req,res)=>{
  res.send("This routes match with any route that contain a inside in it")
})
console.log("Twabonanye byakunze!!".bgBlue);
console.log("Ndabona ibintu ari sawa cyane!!!".rainbow);

app.get('/user/:userId',(req,res)=>{
  res.send(req.params);
  let myUserId = req.params;
  if(myUserId.userId == 500){
    console.log("Murakoze cyane ndabona duhuza");
  }else{
    console.log("Iyo route ntabwo ihura na 500rwf");
  }
  console.log("the request from parameter is ",myUserId.userId);
})

app.listen(port, () => {
  console.log(`Server is Running!!! on : ${port}`);
});
