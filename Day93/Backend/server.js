require("dotenv").config();
const app=require("./src/app.js");
const connectToDb=require("./config/database.js")
connectToDb();
app.listen(3000,()=>
{
    console.log("server is runnign by shri ji");
})

