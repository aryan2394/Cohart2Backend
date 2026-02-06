const express=require("express");
const userModel=require("../models/user.model.js");
const authRouter=express.Router();
const jwt=require("jsonwebtoken")
authRouter.post("/register",async (req,res)=>
{
    let {name,email,password}=req.body;
    let checkemail=await userModel.findOne({email})
    if(checkemail)
    {
        return res.status(400).json({
            "message":"email already exists"
        })
    }
    let user=await userModel.create({
        name,email,password
    })
    let token=jwt.sign(
        {
            id:user._id,
            email:user.email,
        },
        process.env.JWT_SECRET
    )
    res.cookie("jwt_token",token);
    res.status(201).json({
        "message":"shri ji saved",
        'user':user,
        "token":token
    })
})
module.exports=authRouter;