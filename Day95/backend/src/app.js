const express=require("express");
const app=express();
const notesModel=require("../models/notes.model.js");
const cors=require("cors");
const path=require("path");
app.use(express.json());
app.use(cors())
app.use(express.static("./public"))
app.post("/api/notes",async (req,res)=>
{
    let {title,description}=req.body;
    let note=await notesModel.create({
        title:title,
        description:description,
    })
    res.status(201).json({
        "message":"data saved by shri ji",
        note
    })
})
app.get("/api/notes",async (req,res)=>
{
    let notes=await notesModel.find();
    res.status(200).json({
        "message":"get the data fetched",
        notes 
    })
})
app.delete("/api/notes/:id",async (req,res)=>
{
    let {id}=req.params;
    let deletedNote=await notesModel.findByIdAndDelete(id);
    res.status(200).json({
        "message":"deleted the notyes by shri ji",
        deletedNote
    })
})
app.get("*name",(req,res)=>
{
    res.sendFile(path.join(__dirname,"..","/public/index.html"));
})
module.exports=app;