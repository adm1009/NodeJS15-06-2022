// const square = function (x){
//     return x*x
// };
// const square = (x) =>{
//     return x*x
// };
// const square = (x) => x*x

// console.log(square(2));

const event ={
    //  that :this,
    name:"bday party",
    guests:["abhi","ABHI","@bhi"],
    // printguests: function (){
    //     console.log("event is" + this.name);
    // }
    // printguests:  ()=>{
    //     console.log("event is " + this.name);
    // }
    printguests(){
        // const that= this
        console.log("event is" + this.name);
        // this.guests.forEach(function(one){
        //     console.log("the event is "+that.name);
        //     console.log(one + " is attending");
        // })
        this.guests.forEach((one)=>{
            console.log("the event is "+this.name);
            console.log(one + " is attending");
        })
    }
}

event.printguests();