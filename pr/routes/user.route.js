const express=require("express");
const authRouter=express.Router();
const userModel=require("../models/user.model.js");
const jwt=require("jsonwebtoken");
authRouter.post("/register",async (req,res)=>
{
    let {name,email,password}=req.body;
    let ifemail=await userModel.findOne({email});
    if(ifemail!=null)
    {
        return res.status(409).json({
            "message":"email alraedy exists",
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
    res.cookie("jwt_secret",token);
    res.status(201).json({
        "message":"user saved by shri ji",
        "user":user,
        "TOKEN":token,
    })
})
authRouter.post("/login",async (req,res)=>
{
    let {email,password}=req.body;
    let user=await userModel.findOne({email});
    if(!user)
    {
        return res.status(401).json({
            "message":"user have to register to login by shri ji"
        })
    }
    let passwordCheck=user.password===password
    if(!passwordCheck)
    {
        return res.status(401).json({
            "message":"passsword is wrong to connet by shri ji"
        })
    }
    let newtoken=jwt.sign(
        {
            id:user._id,
            password:user.password
        },
        process.env.JWT_SECRET
    )
    res.cookie("jwt_token",newtoken);
    res.status(200).json({
        "message":"login by shri ji"
    })
})
module.exports=authRouter;