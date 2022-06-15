const yargs =require("yargs")
console.log(yargs.argv);

// yargs.version("1.1.0");
yargs.command({
    command:"add",
    describe:"this is add note",
    handler:()=>{
        console.log("adding a note");
    }
})

yargs.command({
    command:"remove",
    describe:"this is remove note",
    handler:()=>{
        console.log("removing a note");
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