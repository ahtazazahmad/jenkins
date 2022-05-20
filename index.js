const express =require('express')();
express.get('/',(req,res)=>{
  res.send("hi this is testing variant")
})
const port =process.env.PORT||2541
express.listen(port,()=>{
  console.log("hi we are listing on port ",port)
})
