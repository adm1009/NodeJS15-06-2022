const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

//define path for config info
const staticDirectory = path.join(__dirname,'/public')
const viewsPath = path.join(__dirname,'/template/views')
const partialsPath = path.join(__dirname,"/template/partials")
// console.log(viewsPath);

//setup static directory to server
app.use(express.static(staticDirectory))

//setting up view engine and views path
app.set("view engine","hbs");
app.set("views",viewsPath)
hbs.registerPartials(partialsPath);

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

// app.get("/home/*",(req,res)=>{
//     res.send("Home particle not found")
// });

// app.get("*",(req,res)=>{
//     res.send("404 Page not found")
// });
app.get("/home/*",(req,res)=>{
    res.render("404",{
        title:"404 page",
        name:"abhijit mulik",
        errorMessage:"Home page details not found"
    })
});

app.get("*",(req,res)=>{
    res.render("404",{
        title:"404 page",
        name:"abhijit mulik",
        errorMessage:"Page Not Found"
    })
});

app.listen(8000,()=>{
    console.log("listing on port 8000");
});