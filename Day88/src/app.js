const express=require("express");
const app=express();
app.get("/",(req,res)=>
{
    res.send("shri ji home page");
})
let arrnotes=[];
app.use(express.json());
// post:ka use tab karte hai jab humein data client se bhejna ho to server side
// get:ka use tab karte hai jab humein data server se lena ho to client side
// delete:ka use tab karte hai jab humein data ko delete karna ho server side se
// patch:ka use tab karte hai jab humein data ko update karna ho server side pe and ismein jab data pratil replace karna ho 
// put:ka use tab karte hai jab humein data ko completely replace karna ho server side pe  

// difference between patch and put
// patch:iska use tab karte hai jab humein data ko partially update karna ho server side pe 
// put:iska use tab karte hai jab humein data ko completely replace karna ho server side pe 
// eg:sirf description updation karna ho toh patch use karenge 
// and agar pura note hi replace karna ho toh put use karenge
app.post("/notes",(req,res)=>
{
    arrnotes.push(req.body);
    console.log(req.body);
    res.send("notes are created succeessfully");
})
app.get("/notes",(req,res)=>
{
    res.send(arrnotes);
})
app.delete("/notes/:id",(req,res)=>
{
    let {id}=req.params
    // dekho params tab use kiya jaata hai jab humein dyanmically data lena ho from client side and data dynamically ho and data size chota ho
    // req.body:jab data client se hi aaye lekin jab data bafda ho tak we use the req.body and jab data chota ho then we use the req.params
    delete arrnotes[id];
    // delete ka matlab hai ki hum data ko remove n kar rahe hai balki uss index pe hum null rakh rahe hai beacuse in real life 
    // data remove nahi hota hai balki uss jagah value null aa jaata hai 
    // gar index wo exist hi nahi karta toh code chlega lekin kuch delete nhi hoga n hi null because wo index exist hi nhikarta hai 
    res.send(arrnotes);
    // why we are not using the slice or splice method here why we use the delete the index by 
})
app.patch("/notes/:id",(req,res)=>
{
    let {id}=req.params
    arrnotes[id].description=req.body.description
    res.send("all done shri ji");
})
module.exports=app;