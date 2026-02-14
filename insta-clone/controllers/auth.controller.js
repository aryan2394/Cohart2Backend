const userModel=require("../models/user.model.js");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
async function registerController(req,res)
{
    const {username,email,password,bio,profilePic}=req.body;
    const isuserexists=await userModel.findOne({
        $or:[
            {
                email
            },
            {
                username
            }
        ]
    })
    if(isuserexists)
    {
        return res.status(409).json({
            "message":(isuserexists.email==email)?"email already exists":"username already exists"
        })
    }
    const hash=bcrypt.hash(password,10);
    const user=await userModel.create({
        username,email,
        password:hash,
        bio,profilePic
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
        "message":"data user saved by shri ji",
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
        return res.status(400).json({
            "message":"user not exists"
        })
    }
    const checkPassword=bcrypt.compare(password,user.password)
    if(!checkPassword)
    {
        return res.status(400).json({
            "message":"wrong password"
        })
    }
    const newtoken=jwt.sign(
        {
            id:user._id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"1d"
        }
    )
    res.cookie("token",newtoken);
    res.status(200).json({
        "message":"user logged in successfully"
    })
}
module.exports={
    loginController,
    registerController,
}