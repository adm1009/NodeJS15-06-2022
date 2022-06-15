const yargs =require("yargs")
const notes = require("./notes.js")
// yargs.version("1.1.0");
yargs.command({
    command:"add",
    describe:"this is add note",
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"body of add",
            demandOption:true,
            type:"string"
        },
    },
    
    // handler:(argv)=>{
    //     console.log("adding a note",argv);
    // }
    // handler:(argv)=>{
    //     console.log("adding a note",argv.title);
    // }
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body)
        // console.log("adding a note",argv.title);
        // console.log("adding a note",argv.body);
    }
})

yargs.command({
    command:"remove",
    describe:"this is remove note",
    builder:{
        title:{
            describe:"remove title",
            demandOption:true,
            type:"string"
        },
        // body:{
        //     describe:"remove body",
        //     demandOption:true,
        //     type:"string"
        // }
    },
    handler:(argv)=>{
        // console.log("removing a note");
        notes.removeNote(argv.title)

    }
})

yargs.command({
    command:"list",
    describe:"this is List note",
    handler:()=>{
        console.log("listing a note");
    }
})

yargs.command({
    command:"read",
    describe:"this is read note",
    handler:()=>{
        console.log("reading a note");
    }
})

yargs.parse();
// console.log(yargs.argv);
