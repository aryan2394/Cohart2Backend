const express=require("express");
const app=express();
const notesModel=require("../models/notes.model.js");
const cors=require("cors");
const path=require("path");
app.use(cors());
app.use(express.json());
app.use(express.static("./public"))
app.post("/api/notes",async (req,res)=>
{
    const {title,description}=req.body;
    let note=await notesModel.create({
        title:title,
        description:description, 
    })
    res.status(201).json({
        "shri ji message":"data saved by shri ji",
        note
    })
})
app.get("/api/notes",async (req,res)=>
{
    let notes=await notesModel.find()
    res.status(200).json({
        "data of shri ji":"fetched succesuusfuly",
        notes
    })
})
app.delete("/api/notes/:id",async (req,res)=>
{
    let {id}=req.params;
    let shrijideletedalldukhnotes=await notesModel.findByIdAndDelete(id);
    res.status(200).json({
        "all dukh data gone":shrijideletedalldukhnotes
    })
})
app.patch("/api/notes/:id",async (req,res)=>
{
    let {id}=req.params;
    let {description}=req.body;
    await notesModel.findByIdAndUpdate(id,{
        description:description
    })
    res.status(200).json({
        "updated life by shri ji":"done"
    })
})
app.use("*name",(req,res)=>
{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})
module.exports=app;