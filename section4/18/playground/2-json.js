const fs= require("fs");

const databuf = fs.readFileSync("2-json.json");

const datajson = databuf.toString();

const dataorig = JSON.parse(datajson);
dataorig.name = "abhi";
dataorig.age = 25;
// console.log(dataorig);

const datachange = JSON.stringify(dataorig);

// console.log(datachange);
fs.writeFileSync("2-json.json",datachange);