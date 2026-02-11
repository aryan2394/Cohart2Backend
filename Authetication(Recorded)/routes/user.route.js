const express=require("express");
const authRouter=express.Router();
const userModel=require("../models/user.model.js");
const jwt=require("jsonwebtoken")
const crypto=require("crypto");
authRouter.post("/register",async (req,res)=>
{
    let {name,email,password}=req.body;
    let userfind=await userModel.findOne({email});
    if(userfind)
    {
        return res.status(200).json({
            "message":"user already exists please login"
        })
    }
    const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
    let user=await userModel.create({
        name,email,
        password:hashedPassword
    })
    let token=jwt.sign(
        {
            id:user._id,
        },
        process.env.JWT_SECRET,{expiresIn:"1h"}
    )
    res.cookie("jwt_secret",token);
    res.status(201).json({
        "message":"data saved by shri ji",
        "user":user,
        "token":token
    })
})
authRouter.get("/get-me",async (req,res)=>
{
    const token=req.cookies.jwt_secret;
    // jwt.verify() authenticates the token and gives back the payload if valid.
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    // ye verify karega ki ye token maine banaya hai ya nahi 
//     Where did payload come from?

// At login/register we created token using:

// jwt.sign({
//    id: user._id,
//    email: user.email
// }, secret)

// What verify returns?
// decoded = {
//    id: "...",
//    email: "...",
//    iat: 123456,
//    exp: 123456
// }
    const user=await userModel.findById(decoded.id);
    res.status(200).json({
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
            "message":"please register first",
        })
    }
    const hash = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
    let checkpassword=user.password===hash;
    if(checkpassword==false)
    {
        return res.status(400).json({
            "message":"password is wrong",
        })
    }
    let newtoken=jwt.sign(
        {
            id:user._id,
            email:user._id,
        },
        process.env.JWT_SECRET
    )
    res.cookie("jwt_secret",newtoken);
    res.status(200).json({
        "message":"login success",
        "user":user,
        "token":newtoken,
    })
})
module.exports=authRouter;