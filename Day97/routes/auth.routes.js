// issi mein hum saare routes banayenge authorization wale 
// dekho humein kya karna hai ki jab new user aaye pahle toh uso eregister karana hai 

// toh sabse pahle usko databse mein save karna hai and then token create karna hai 

const express=require("express");
// ab dekho jab hum app.js mein rate hai toh we do 
// const app=express() 
// but outside the app file hum kya karte hai ki ek router banate hai 
const userModel=require("../models/user.model.js")
const authRouter=express.Router();
// ab jo kaam humar app arta tha wahi kaam ab ye kar sakta hai authRouter like app.get ussi tarah authRouter.get etc
const jwt=require("jsonwebtoken");

authRouter.post("/register",async (req,res)=>
{
    const {name,email,password}=req.body;
    // ab save in your adatabse 
    const checkemail=await userModel.findOne({email})
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
        "message by shri ji":"data saved by shri ji",
        user,
        token,
    })
    // dekho abhi tak kya ho gaya hai ki pahle step mein data ko save karna hai databse mein 
    // step2:create a token with the data taaki hum usko identify kar sakein and uss identity card mein humara data bhi rahata hai and 
    // same id card bhi koi n bana le isske liye hum mohar maarte hai 
    // toh humne data save kiya token craete karte samy with the user data and sign with the jwt taaki paat chale ki ye token iss server ne create kiya hai
    // toh we sign the token with jwt secret 

    // and humara kaam ab complete and ab hum kya karte hai ki jab bhi data create hoga humein usse cookies mein store akr dete hai taaki hum bhi user
    // agli baar aaye then we can do the token verification 
    // because server direct;y humein cookies ko raed kar sakta hai toh we store the data in cookies
})
// aapne saar post route ache se lilkha hai lekin express ko pata hi nahi hai iss route ke baare mein abhi toh what you can do
// use in app.js
module.exports=authRouter;