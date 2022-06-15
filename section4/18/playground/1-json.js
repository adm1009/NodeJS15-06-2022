const fs =require("fs");
const book ={
    title:"new book",
    author:"abhi"
}

// const bookJSON =JSON.stringify(book);
// console.log(bookJSON);
// console.log(bookJSON.title);
// const bookori =JSON.parse(bookJSON)
// console.log(bookori);
// console.log(bookori.title);

const bookJSON =JSON.stringify(book);
// fs.writeFileSync("1-json.json",bookJSON)
const datajsonbuf = fs.readFileSync("1-json.json")
// console.log(datajsonbuf);
const datajson = datajsonbuf.toString();
// console.log(datajson);
const dataobj = JSON.parse(datajson);
console.log(dataobj);
console.log(dataobj.title);
