require("dotenv").config()
const app=require("./src/app.js");
const mongoose=require("mongoose");
const connectToDb=require("./config/database.js")
connectToDb();
app.listen(3000,()=>
{
    console.log("server is running is properly by shri ji");
})