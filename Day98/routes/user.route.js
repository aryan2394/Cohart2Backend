const express=require("express");
const userModel=require("../models/user.model.js");
const authRouter=express.Router();
const jwt=require("jsonwebtoken");

// route is /api/auth/register

authRouter.post("/register",async (req,res)=>
{
    let {name,email,password}=req.body;
    const emailverify=userModel.findOne({email});
    if(emailverify==true)
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
        "message":"data saved",
        "user":user,
        "token":token
    })
})

// route is /api/auth/protected

authRouter.post("/protected",(req,res)=>
{
    res.status(200).json({
        "cookies":req.cookies
    })
})

// ab humein login feature banana hai matlan ki agar user name and password daale toh wo ligin ho jaaye 
// imsien kya kya kya hota hai 
// dekho user name and password ke saath request karega and if verified by our server the login suceesful
// agar verifed then humein ab usse naya token banake return kar dena toh ab jab bhi wo aayega and request karega then new token se hi rqeuest karega

// api/auth/login

authRouter.post("/login",async (req,res)=>
{
    let {email,password}=req.body;
    // ab sabse pahla step ki verify email ki wo exists karta bhi hai ya nahi aisa ho ki wo request kar raha ho login
    let user=await userModel.findOne({email});
    // ek learning if you check the if(userr==true) it will not give any output beacuse agar user exists nahi karega then it will return null
    // and you are checking the userr==false or true but value ya toh null hogi ya string koi 
    // ha user.paswrod==password ye true and false return karega here you can check the true or false 
    if(!user)
    {
        return res.status(404).json({
            "message":"user not exist please register"
        })
    }
    // if verified matlab ki user with email exists then now check password 
    // if email is correct and password wrong then you cannot allow him to login 
    const checkPassword=user.password===password;
    if(!checkPassword)
    {
        return res.status(401).json({
            "message":"please give the correct password to login"
        })
    }
    // yaha tak pahunche matlab user has correct email and password toh ab next step is to craete new token 
    let newtoken=jwt.sign(
        {
            id:user._id,
            email:user.email,
        },
        process.env.JWT_SECRET
    )
    res.cookie("jwt_token",newtoken);
    res.status(200).json({
        "message":"you are login successful",
        "userdata":user,
        "new token":newtoken
    })
})
module.exports=authRouter;