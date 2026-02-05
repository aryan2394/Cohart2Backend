const express=require("express");
const app=express();
// do kaam main hota hai iska server ko create karna nad server ko config karna 
app.get("/",(req,res)=>
{
    res.send("shri ji home page")
})
module.exports=app;