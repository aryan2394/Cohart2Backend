const express=require("express");
const app=express();
const connectToDb=require("../config/database.js");
const notesModel=require("../model/notes.model.js");
const cors=require("cors");
const mongoose=require("mongoose")
const path=require("path");
app.use(cors());
app.use(express.static("./public"));
connectToDb();
app.use(express.json());
app.post("/api/notes",async (req,res)=>
{
    let {title,description}=req.body;
    let note=await notesModel.create({
        title:title,
        description:description,
    })
    res.status(201).json({
        "message":"notes saved by shri ji",
        "note":note
    })
})
app.get("/api/notes",async (req,res)=>
{
    let notes=await notesModel.find();
    res.status(200).json({
        "allnotes":notes
    })
})
app.delete("/api/notes/:id",async (req,res)=>
{
    let {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({
            "id":"id not valid w",
        })
    }
    let deletedNote=await notesModel.findByIdAndDelete(id);
    if(!deletedNote)
    {
        return res.status(404).json({
            "notes":"note not exist"
        })
    }
    res.status(200).json({
        "note":deletedNote,
        "id is":id
    })
})
app.patch("/api/notes/:id",async (req,res)=>
{
    let {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({
            "message":"id not exists invalid id"
        })
    }
    let {description}=req.body
    let updated=await notesModel.findByIdAndUpdate(
        id,
        {
            description:description,
        },
        {new:true}
    )
    res.status(200).json({
        "updated":updated,
    })
})
app.use("*name",(req,res)=>
{
    res.sendFile(path.join(__dirname,"..","/public/index.html"));
})
module.exports=app;