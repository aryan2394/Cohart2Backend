const express=require("express");
const app=express();
const connectToDb=require("../config/database.js");
const authRouter=require("../routes/user.route.js");
const cookieParser=require("cookie-parser");
connectToDb();
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter);
module.exports=app;
