const mongoose=require("mongoose");
function connectToDb()
{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>
    {
        console.log("databse is connected by shri ji");
    })
    .catch((err)=>
    {
        console.log("error is",err);
    })
}
module.exports=connectToDb;