const app=require("./src/app.js");
const mongoose=require("mongoose");
function connectToDB()
{
    mongoose.connect("mongodb+srv://Shriji:1g1fiHbVgpK9ieLk@cluster0.gxnwemt.mongodb.net/day-6")
    .then(()=>
    {
        console.log("database is running by shri ji");
        
    })
}
connectToDB()
app.listen(3000,()=>
{
    console.log("server is running by shri ji");
})