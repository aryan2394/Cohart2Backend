const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
app.use(cookieParser());
app.use(express.json())
const authRouter = require("../routes/auth.routes.js");
// matlab ki humein ab register api ko hit karna hai toh we have to hit api :/api/auth/register
app.use("/api/auth",authRouter)
module.exports=app;