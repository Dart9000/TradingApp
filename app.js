const express=require("express");
const bodyparser=require("body-parser");
const res = require("express/lib/response");

const app=express();

app.get("/",(req,res)=>{
res.send("hello");
});


app.listen(3000,()=>{
console.log("chlra h ");
});
