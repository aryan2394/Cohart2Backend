const express=require("express");
const app=express();
const notesModel=require("../models/notes.model.js");
app.use(express.json());
app.post("/notes",async (req,res)=>
{
    let {title,description}=req.body
    let note=await notesModel.create({
        title,description
    })
    res.status(201).json({
        "message":"saved the data shri ji",
        note
    })
})
app.get("/notes",async (req,res)=>
{
    let allnotes=await notesModel.find()
    res.status(200).json({
        "alldata":allnotes
    })
})
module.exports=app; 