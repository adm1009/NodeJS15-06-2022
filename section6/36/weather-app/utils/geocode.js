const getdata = (address,callback)=>{

    const url = "http://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +"?access_token=pk.eyJ1IjoiYWRtMTAwOSIsImEiOiJjbDRjY21wOXYwZHp6M2hwYms3dnNocHA4In0.5Bjdhx__0g9g-cTR5O52rg&limit=1"
    // 
    request({url:url,json:true},(err,response)=>{
        // console.log(response);
        if(err){
            callback("unable to connect",undefined);
        }
        else if(response.body.features.length === 0){
            callback("unable to find location",undefined);
        }
        else{
            callback(undefined,{longitude:response.body.features[0].center[1],
           latitude:response.body.features[0].center[0]});
        }
        // const data = JSON.parse(response);
    })};
  
    
    module.exports = getdata;