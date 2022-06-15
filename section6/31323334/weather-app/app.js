const request = require("request");

// const url= "http://api.weatherstack.com/current?access_key=1524cf8b01eb6e11745549ceef09da32&query=18.5204,73.8567&units=f"
// request({url:url,json:true},(error,response)=>{
    // const data = JSON.parse(response.body);
    // console.log(response);
    // console.log(data);
    // console.log(data.current);
    // console.log(response.body.current);
    // const temp = response.body.current.temperature;
    // const feeling = response.body.current.feelslike;
    // console.log(temp);
    // console.log(feeling);
//     for the fahrenheit
//     const weatherdesciption = response.body.current.weather_descriptions[0];
//     const temp = response.body.current.temperature;
//     const feeling = response.body.current.feelslike;
//     console.log(temp);
//     console.log(feeling);
//     console.log(weatherdesciption);
// })

//error handling
// const url= "http://api.weatherstack.com/current?access_key=1524cf8b01eb6e11745549ceef09da32&query=18.5204,73.8567&units=f"
// request({url:url,json:true},(error,response)=>{
    
//     // console.log(error);
//     if(error){
//         console.log("unable to connect");
//     }
//     else if(response.body.error){
//        console.log("error in url");
//     }
//     else{
//         const temp = response.body.current.temperature;
//     const feeling = response.body.current.feelslike;
//     console.log(temp,feeling)
//     }
// })

//geocoding
// const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWRtMTAwOSIsImEiOiJjbDRjY21wOXYwZHp6M2hwYms3dnNocHA4In0.5Bjdhx__0g9g-cTR5O52rg&limit=1"

// request({url:url,json:true},(err,response)=>{
//     console.log(response.body.features[0].center[1]);
//     console.log(response.body.features[0].center[0]);

//     // const data = JSON.parse(response);
// })

//error handling with geocoding
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/asasasawqwsa.json?access_token=pk.eyJ1IjoiYWRtMTAwOSIsImEiOiJjbDRjY21wOXYwZHp6M2hwYms3dnNocHA4In0.5Bjdhx__0g9g-cTR5O52rg&limit=1"
// Los%20Angeles
request({url:url,json:true},(err,response)=>{
    if(err){
        console.log("unable to connect");
    }
    else if(response.body.features.length === 0){
        console.log("unable to find location");
    }
    else{
        console.log(response.body.features[0].center[1]);
        console.log(response.body.features[0].center[0]);
    }
   

    // const data = JSON.parse(response);
})