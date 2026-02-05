const express=require("express");
const app=express()
app.use(express.json()); // ye middleware hai jisse ki express json data ko read kar sake
const arrnotes=[];
app.post("/notes",(req,res)=>
{
    res.send("This is a post request for notes shri ji");
    // res(response) matlab:jab hueimn request bhejte hai to server kya response dega
    // req(request):matlab jab client kuch bhi data bhejta hai to server us data ko kaise receive karega  matlab saara data from client can be accessed using req object
    // console.log(req.body);
    arrnotes.push(req.body);
    
    
    
    // ab dikkat kya hai ki express jo hai jo data aata hai from client se in json format usko read nahi kar sakta hai isliye hume ek middleware use karna padega jisse ki express json data ko read kar sake
    // app.use(express.json());
})
app.get("/notes",(req,res)=>
{
    res.send(arrnotes);
})
// post ka use yaha kyon:bcoz hum new notes create kar rahe hai isliye post request use kar rahe hai
app.listen(3000,()=>
{
    console.log("server is running properly");
})
