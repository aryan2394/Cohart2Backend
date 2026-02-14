const mongoose=require("mongoose");
const connectToDb=async ()=>
{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database is connected by shri ji");
}
module.exports=connectToDb;