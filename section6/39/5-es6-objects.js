// const uname="abhi";
// const age=25;

// const details = {
//     uname,
//     userage:age,
//     Location: "Pune"
// } 

// console.log(details);

//object destructuring
const product ={
    label:"red note book",
    price:201,
    stock:150,
    salesprize:undefined,
    // rating:4.2
}

// console.log(product.price);

// const{stock:newstock,rating=5} = product;

// console.log(rating);
// console.log(newstock);


const transaction = (type,{label,price,stock}) =>{
   console.log(label, price, type, stock);
};

transaction("order",product)