const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const userModel=require("../models/user.model.js");
const jwt=require("jsonwebtoken");
async function registerController(req,res)
{
    const {username,email,password,bio,imageUrl}=req.body;
    const isuserexists=await userModel.findOne({
        $or:[
        {
            username
        },
        {
            email
        },
    ]
    })
    if(isuserexists)
    {
        return res.status(200).json({
            "message":(isuserexists.email==email)?"email already exists":"username already exists",
        })
    }
    const hashPassword=await bcrypt.hash(password,10);
    const user=await userModel.create({
        username,email,password:hashPassword,bio,imageUrl
    })
    const token=jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"1d"
        }
    )
    res.cookie("token",token);
    res.status(201).json({
        "message":"user saved by shri ji",
        "data":user,
        "token":token
    })
}
async function loginController(req,res)
{
    const {username,email,password}=req.body;
    const user=await userModel.findOne({
        $or:[
            {
                username:username
            },
            {
                email:email
            }
        ]
    })
    if(!user)
    {
        return res.status(409).json({
            "message":"user not exists please register by shri ji"
        })
    }
    const passwordCheck=await bcrypt.compare(password,user.password);
    if(!passwordCheck)
    {
        return res.status(400).json({
            "message":"password is wrong",
        })
    }
    const newToken=jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"1d"
        }
    )
    res.cookie("token",newToken);
    res.status(200).json({
        "message":"login by shri ji"
    })
}
module.exports={
    registerController,
    loginController,
}