// const express =require('express')();
// express.get('/',(req,res)=>{
//   res.send("hi this is testing variant")
// })
// const port =process.env.PORT||2541
// express.listen(port,()=>{
//   console.log("hi we are listing on port ",port)
// })

const { response } = require("express");



// // express.get('/',(req,res)=>{
// //   res.send("hi this is testing variant")
// // })
// // const port =process.env.PORT||2541
// // express.listen(port,()=>{
// //   console.log("hi we are listing on port ",port)
// // })

let products =[
  {
      "product_id": "1",
      "product_image": "http://127.0.0.1:8000/media/xman-4.jpg.pagespeed.ic.J8OoLU7MnQ.jpg",
      "product_name": "New",
      "product_price": 200,
      "product_quantity": 1
  },
  {
      "product_id": "2",
      "product_image": "http://127.0.0.1:8000/media/xman-2.jpg.pagespeed.ic.T_2AEz9Aq2.jpg",
      "product_name": "Good Shoes",
      "product_price": 200,
      "product_quantity": 1,

  },
  {
      "product_id": "3",
      "product_image": "http://127.0.0.1:8000/media/xman-3.jpg.pagespeed.ic.nBoP91E3Qs_TkjfKaN.jpg",
      "product_name": "Good Coat",
      "product_price": 200,
      "product_quantity": 1
  }
]
let product_id=2;
let product_quantity=33;
// products = products.map(val =>
//   val.product_id ==2 ? { ...val, product_quantity: product_quantity } : val
// );
//remove element 
let activities = [
  'Work',
  'Eat',
  'Commute',
  'Play Game',
  'Sleep'
];
// let k = activities.map((val)=>val==='Eat'?val='NextBridge':val)
// let k = activities.filter(val=>val!=='Eat')
// console.log(k)
// for(let i in activities){
  
//   activities.splice(1,1)
// }
let index = activities.indexOf('Eat')
// console.log(index)
activities.splice(1,1)
console.log(activities)
// products.map((e, i) => 
// console.log("e\t",e,"\ti\t"+i)
// )
