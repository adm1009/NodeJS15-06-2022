console.log("client side js running!");
fetch("http://localhost:8000/weather?address=boston").then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error);
        }else{
            // const oriData = JSON.parse(data)
            console.log(data.location);
            console.log(data.forcastData);
        }
        
    })
})