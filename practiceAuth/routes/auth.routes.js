const express=require("express");
const authRouter=express.Router();
const userModel=require("../models/user.model.js");
const crypto=require("crypto");
const jwt=require("jsonwebtoken");
authRouter.post("/register",async (req,res)=>
{
    let {name,email,password}=req.body;
    let uniquemail=await userModel.findOne({email});
    if(uniquemail)
    {
        return res.status(400).json({
            "message":"user already exists with these email id "
        })
    }
    let hashedPassword=crypto.createHash("sha-256").update(password).digest("hex");
    let user=await userModel.create({
        name,email,
        password:hashedPassword
    })
    const token=jwt.sign(
        {
            id:user._id,
        },
        process.env.JWT_SECRET,
    )
    res.cookie("token",token);
    res.status(201).json({
        "data user":user,
        "token":token
    })
})
authRouter.get("/get-me",async (req,res)=>
{
    let token=req.cookies.token;
    const payload=jwt.verify(token,process.env.JWT_SECRET);
    const user=await userModel.findById(payload.id);
    res.status(200).json({
        "token":token,
        "name":user.name,
        "email":user.email,
    })
})
authRouter.post("/login",async (req,res)=>
{
    let {email,password}=req.body;
    let user=await userModel.findOne({email});
    if(!user)
    {
        return res.status(409).json({
            "message":"user not exists"
        })
    }
    const hash=crypto.createHash("sha-256").update(password).digest("hex");
    const checkPassword=hash==user.password;
    if(checkPassword==false)
    {
        return res.status(400).json({
            "message":"password is wrong",
        })
    }
    const newtoken=jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRET,
    )
    res.cookie("token",newtoken);
    res.status(201).json({
        "user data":user,
        "token":newtoken,
    })
})
module.exports=authRouter;