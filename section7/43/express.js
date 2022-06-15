const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("this is the entrance page")
});
app.get("/home",(req,res)=>{
    res.send("this is home page")
});
app.get("/about",(req,res)=>{
    res.send("this is about page")
});
app.get("/weather",(req,res)=>{
    res.send("this is weather page")
});
app.listen(3000,()=>{
    console.log("listing on port 3000");
});