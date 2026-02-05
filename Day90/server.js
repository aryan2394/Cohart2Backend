const app=require("./src/app");
// kaam no 1 server start karna hand 
// databse se connect karna backend ko

const mongoose=require("mongoose");
// mongoose humare databse ko connect karta hai humare server se 
function connectToDB()
{
    mongoose.connect("mongodb+srv://Shriji:1g1fiHbVgpK9ieLk@cluster0.gxnwemt.mongodb.net/day-6")
    // these link is copied from the compass side copy conncetion string and net / 
    // ke baad wala copy string mein nahi tha iska MATLAB YE HAI KI cluster 0 mein ek databse banao day 6 naam ka 
    // dekho humne monogsb atlas mein  ek cluster banaya tha mumbai mein and usmein hum databse bana skate hai kai saare toh 
    // hum kya karte hai ki cluster 0 mein ek databse craete karte hai jo ki hai day-6 naam ka 

    // ab dekho hum hai abhi mathura mein server and databse is in mumbai and humein humare local system pe jo server hai usko connect karna hai mumbai wale 
    // databse se then we need iknternet speed and usmein samay lah\g sakata hai is;liye we use ki jab conncet ho jaaye tanb abata dena ki ha connce tho gaya and agar ko error a rahi hai toh wo bhi bata do
    
    .then(()=>
    {
        console.log("shri ji ke databse mein mera naam hai");
    })
}
connectToDB();
app.listen(3000,()=>
{
    console.log("shri ji ki kripa se sab chal raha hai ");
    
})