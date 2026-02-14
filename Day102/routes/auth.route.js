const express=require("express");
const authRouter=express.Router();
const authController=require("../controllers/auth.controller")
// sabse pahle humein ek user ko register karna hai and usk ek token dena hai 
authRouter.post("/register",authController.registerController)
authRouter.post("/login",authController.loginController)
module.exports=authRouter;