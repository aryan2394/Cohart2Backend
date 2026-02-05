const express=require("express");
const app=express()
app.get("/",(req,res)=>
{
    res.send("shri ji");
})
app.get("/about",(req,res)=>
{
    res.send("about shri ji");
})
app.listen(3000,()=>
{
    console.log("server is runnin g properly");
})