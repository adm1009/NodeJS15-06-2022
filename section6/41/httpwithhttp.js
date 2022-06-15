const http =require("http");


const url="http://api.weatherstack.com/current?access_key=1524cf8b01eb6e11745549ceef09da32&query=18.5204,73.8567&units=f";

const request = http.request(url,(response)=>{
    let data="";
    response.on("data",(chunk)=>{
        data = data + chunk.toString();
    });

    response.on("end",()=>{
        const newData = JSON.parse(data)
        console.log(newData);
    })
    
});

request.on("error",(err)=>{
    console.log("unreachable",err);
})

request.end();