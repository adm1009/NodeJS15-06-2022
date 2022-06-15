const express = require("express");
const path = require("path");
const app = express();

// app.get("/",(req,res)=>{
//     res.send("<h1>this is the entrance page</h1>")
// });
console.log(__dirname);
console.log(__filename);

const staticDirectory = path.join(__dirname,'../public')
app.use(express.static(staticDirectory))
// app.get("/",(req,res)=>{
    
//     res.send()
// });
// app.get("/home",(req,res)=>{
//     res.send({
//         name:"abhi",
//         age:25
//     })
// });
// app.get("/about",(req,res)=>{
//     res.send([{about:"me"},{about:"u"}])
// });
app.get("/weather",(req,res)=>{
    res.send("this is weather page")
});
app.listen(8000,()=>{
    console.log("listing on port 8000");
});