const express = require("express");
const app = express();
const PORT = 5000;

app.get("/",(req,res)=>{
  res.json({
    "status":true
  })
})

app.listen(PORT,(err)=>{
  if(err) return console.log(err);
  console.log("running on port " , PORT)
})