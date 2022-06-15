const express = require("express");
const app = express();
const path = require("path");

//define path for config info
const staticDirectory = path.join(__dirname,'/public')
const viewsPath = path.join(__dirname,'/template')
// console.log(viewsPath);

//setup static directory to server
app.use(express.static(staticDirectory))

//setting up view engine and views path
app.set("view engine","hbs");
app.set("views",viewsPath)
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