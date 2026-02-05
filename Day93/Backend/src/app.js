const express=require("express");
const app=express();
const notesModel=require("../models/notes.model.js")
const cors=require("cors");
app.use(express.json());
app.use(cors());
// ye ensure karega ki aap cross origin matlab differet url se data accept kar sako 
app.post("/api/notes",async (req,res)=>
{
    let {title,description}=req.body;
    const note=await notesModel.create({
        title,description
    })
    res.status(201).json({
        "message":"data saved by shri ji",
        note
    })
})
app.get("/api/notes",async (req,res)=>
{
    const allnotes=await notesModel.find()
    // ye data return karti hai array of ojects ke form mein 
    res.status(200).json({
        "notes":allnotes
    })
})
// delete the given note by its id 
app.delete("/api/notes/:id",async (req,res)=>
{
    let {id}=req.params;
    let deleted=await notesModel.findByIdAndDelete(id);
    res.status(200).json({
        "deleted":deleted
    })
})
// patch humein sirf description ko update karna hai on the basis of its id 
app.patch("/api/notes/:id",async (req,res)=>
{
    let {id}=req.params;
    let {description}=req.body;
    let updateddata=await notesModel.findByIdAndUpdate(id,{description})
    res.status(200).json({
        "updatred data by shri ji":updateddata,
    })
})
module.exports=app;