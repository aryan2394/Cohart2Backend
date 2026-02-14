const userModel=require("../models/user.model.js");
const crypto=require("crypto");
const jwt=require("jsonwebtoken");
async function loginController(req,res)
{
    const {username,email,password}=req.body;
    // humein ab login karna hai either by email,password or username,password 
    // matlab user sirf kuch ek hi cheez se login karega
    // way1:email:undefined(if email is not given) and password is :shriji and username is:shriji123
    // way2:email:shriji@gmail.com ,password :shriji and username is undefined

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
    // agar n hi user emailor username ke bais pe find hota hai then user not exists
    if(!user)
    {
        return res.status(404).json({
            "message":"User not found by shri ji"
        })
    }
    // agar exists then match the password but we store the password by hash function
    const hash=crypto.createHash("sha256").update(password).digest("hex");
    const checkPassword=hash==user.password;
    if(!checkPassword)
    {
        return res.status(404).json({
            "message":"password to unlock shri ji is wrong"
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
        "message":"login success by shri ji",
        "userdata":{
            username:user.username,
            bio:user.bio,
            email:user.email,
        },
    })
}
async function registerController(req,res)
{
    const {username,email,password,bio,profilePic}=req.body;
    // as humein check karna hai ki emal should be unique and username
    // const isEmailExists=await userModel.findOne({email});
    // if(isEmailExists)
    // {
    //     return res.status(409).json({
    //         "message":"email already exists"
    //     })
    // }
    // const isUsernameExists=await userModel.findOne({username});
    // if(isUsernameExists)
    // {
    //     return res.status(409).json({
    //         "message":"username exists already"
    //     })
    // }
    const isUserAlreadyExists=await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(isUserAlreadyExists)
    {
        return res.status(409).json({
            message:
            isUserAlreadyExists.username === username
            ? "username already exists"
:           "email already exists"
        })
    }
    const hash=crypto.createHash("sha256").update(password).digest("hex");
    const user=await userModel.create({
        username,email,password:hash,bio,profilePic
    })
    const token=jwt.sign(
        {
            id:user._id
        },process.env.JWT_SECRET
        ,{
            expiresIn:"1d"
        },
    )
    res.cookie("token",token);
    res.status(201).json({
        "message":"shri ji registed by shri ji",
        "userInfo":{
            name:user.name,
            email:user.email,
            bio:user.bio,
            profilePic:user.profilePic,
        }
    })
}
module.exports={
    registerController,
    loginController,
}