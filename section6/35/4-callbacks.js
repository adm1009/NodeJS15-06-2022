// setTimeout (()=>{
//     console.log("2 seconds up");
// },2000);

// const names = ["abhi","mulik"]

// const check = names.filter((name)=>{
//     return name.length >=4
// });

// console.log(check);

// // const getCode = (address,callback) =>{
// //     const data = {
// //         lat:0,
// //         lon:0
// //     }
// //     return data;
// // }

// // console.log(getCode("abhi"));

// const getCode = (address,callback) =>{
//     setTimeout(()=>{
//         const data = {
//             lat:0,
//             lon:0
//         }
//         // return data;
//         callback(data)
//     },2000)
   
// }

// getCode("abhi",(data)=>{
//     console.log(data);
// });

const add = (num1,num2 ,callback)=>{
    //  const data=num1+num2;
    setTimeout (()=>{
            const data = num1+num2;
            callback(data)
    },2000)
};
add(1,4,(sum)=>{
    console.log(sum);
})
