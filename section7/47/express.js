const express = require("express");
const app = express();
const path = require("path");

const staticDirectory = path.join(__dirname,'../public')
app.use(express.static(staticDirectory))
app.set("view engine","hbs");

app.get("",(req,res)=>{
    res.render("index",{
        title:"index file",
        name:" abhijeet"
    })
})
app.get("/about",(req,res)=>{
    res.render("about",{
        title:"about page",
        name:"abhi"
    })
})
app.get("/home",(req,res)=>{
    res.render("home",{
        title:"home page",
        name:"abhi mulik"
    })
})

app.get("/weather",(req,res)=>{
    res.send("this is weather page")
});
app.listen(8000,()=>{
    console.log("listing on port 8000");
});