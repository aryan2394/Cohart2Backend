const express=require("express")
const app=express();
app.get("/",(req,res)=>
{
    res.send("shri ji home page")
})
let arr=[]
app.use(express.json());
app.post("/notes",(req,res)=>
{
    arr.push(req.body);
    // console.log("shri ji ek aur added");
    // res.send("added shri ji")
    res.status(201).json({
        "message":"shri ji added in our life"
    })
})
app.get("/notes",(req,res)=>
{
    res.status(200).json({
        "notes":arr
    })
})
app.delete("/notes/:id",(req,res)=>
{
    let {id}=req.params
    delete arr[id]
    res.status(200).json({
        "message":"deleted sucessfully all problem by shri ji"
    })
})
app.patch("/notes/:id",(req,res)=>
{
    let {id}=req.params
    arr[id].title=req.body.title
    res.status(200).json({
        "message":"updated sucessfully"
    })
})
app.put("/notes/:id",(req,res)=>
{
    let {id}=req.params
    arr[id]=req.body;
    res.status(201).json({
        "message":"updated life by shri ji "
    })
})
module.exports=app;