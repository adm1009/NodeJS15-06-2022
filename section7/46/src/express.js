const express = require("express");
const path = require("path");
const app = express();

const staticDirectory = path.join(__dirname,'../public')
app.use(express.static(staticDirectory))

app.get("/weather",(req,res)=>{
    // res.write("hii");
    // res.send("this is weather page")
    res.end("hii");
    
});
app.listen(8000,()=>{
    console.log("listing on port 8000");
});