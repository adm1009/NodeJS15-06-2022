const fs = require("fs");
const chalk = require("chalk");
const getNotes = () =>  "your notes..";


const addNote =  (title, body)=> {
  const notes = loadNotes();
  // const dulicateNotes = notes.filter( (note) => note.title === title);
  const duplicateNote = notes.find((note)=>note.title === title);

  // console.log(duplicateNote);
  // console.log(title);
  debugger

  if (!duplicateNote) { //or we can write duplicateNote===undefined
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log("new note added!");
  } else {
    console.log("note is already present!");
  }
  // if (dulicateNotes.length === 0) {
  //   notes.push({
  //     title: title,
  //     body: body,
  //   });

  //   saveNotes(notes);
  //   console.log("new note added!");
  // } else {
  //   console.log("note is already present!");
  // }

  //   console.log(notes);
};

const saveNotes =  (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote =(title) => {

    // console.log(title);
    // const dataBuffer = fs.readFileSync("notes.json");
    // const dataJSON = dataBuffer.toString();
    // const dataObj = JSON.parse(dataJSON);
    // const newNotes =  dataObj.filter(function(note){
    //     return note.title !== title
    //   })
    
    //   if(newNotes.length !== 0){
    //     const newdataJSON = JSON.stringify(newNotes);
    //     return fs.writeFileSync("notes.json",newdataJSON)
    //   }else if(newNotes.length !== dataObj.length){
    //     return console.log("no data is present");
    //   }

    const notes = loadNotes();
    const notesToKeep = notes.filter ((note)=> note.title !== title
    )
      if(notes.length === notesToKeep.length){
          console.log(chalk.red.inverse("no note found"));
      }else{
          saveNotes(notesToKeep);
          console.log(chalk.green.inverse("note removed!"));
      }
    //  saveNotes(notesToKeep);
   
}
const listNotes = () =>{
  console.log(chalk.inverse("your notes are..."));
  const notes=loadNotes();
  notes.map((note)=>{
    return console.log(note.title)
  })
  //we can use foreach also at here
}
const readNote = (title) =>{
   const notes = loadNotes();
   const read = notes.find((note) => note.title === title);
  //  console.log(chalk.inverse("reading notes")
   if(read){
       console.log(read.title)
       console.log(read.body)
   }else{
      console.log(chalk.red.inverse("no note found"))
   }
}
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote:removeNote,
  listNotes:listNotes,
  readNote:readNote
};
