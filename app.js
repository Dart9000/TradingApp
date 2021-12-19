const express=require("express");
const bodyparser=require("body-parser");
const res = require("express/lib/response");

const app=express();

app.set('view engine','ejs');

app.get("/",(req,res)=>{
res.send("hello");
});

const port=process.env.PORT||3000;
app.listen(port,()=>{
console.log("chlra h ");
});
