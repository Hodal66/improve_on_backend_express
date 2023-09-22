const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
  res.send("This is___________ the home page of the project");
});
app.get("/user", (req, res) => {
  res.send("We will back to you as soon as possible don't worry about that!!");
});

// app.use("/static",express.static('public'));
app.use("/static", express.static(path.join(__dirname, "public")));
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
app.listen(port, () => {
  console.log(`Server is Running!!! on : ${port}`);
});
