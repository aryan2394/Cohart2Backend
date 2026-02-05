const express=require("express");
const app=express();
const cors=require("cors");
const path=require("path")
app.use(cors());
app.use(express.json());
app.use(express.static("./public"))
const notesModel=require("../models/notes.model.js")
app.post("/api/notes",async (req,res)=>
{
    let {title,description}=req.body;
    let note=await notesModel.create({
        title,description
    })
    res.status(201).json({
        "message":"shri ji saved",
        note
    })
})
app.get("/api/notes",async (req,res)=>
{
    let notes=await notesModel.find();
    res.status(200).json({
        "notes":notes
    })
})
app.delete("/api/notes/:id",async (req,res)=>
{
    let {id}=req.params;
    let deletednote=await notesModel.findByIdAndDelete(id)
    res.status(200).json({
        "message":"shri ji deleted all the bad things",
        deletednote
    })
})
// these isw a common page
app.use("*name",(req,res)=>
{
    // huymein poore ke poore html file ko bhejna hoga in res.sendFile(index.html) 
// lekin kaun se index.html because sendfile poora bsolute path maangta hai 70dev/userts/desktop 
// tyoh usse bachne ke liye we can us the require(path) jo ki humein jis bhi file mein hum hai waha tak ka path de detaq hai 
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
    // __dirname:ye kya karta hai ki jaise humara file abhi app..js src fiolder mein hai toh ye yaha tak ka poora absolute apth provide karega 
    // matlab jis bhi file mein ho usse bahar tak ka poora absolute payh provide kar dega 70dev/userts/dekstop..

    // "..":ye kyon dekho hum pahunch gaye hai src folder tak lekin humein jaana hai public folder mein isliye we .. taaki hum ek folder bahar ja sakein 

    // lekin abhi bhi kcu dikh nahi raha hai home page pe why ?
    // because index.htrml file needs two things script=index.js and styleshewet=style.css lekin humne usse toh bheja hi nahi toh kaise chalega code humar toh uske loye
    // humein use karna hoga ek middleware jiska naam hai app.use(express.static) ?ye humarae ststic files ko read kareta hai 
})
module.exports=app;