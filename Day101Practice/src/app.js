const express=require("express");
const app=express();
const authRouter=require("./routes/auth.route.js");
const cookieParser=require("cookie-parser");
const postRouter=require("./routes/post.route.js")
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/auth",authRouter);
app.use("/api/posts",postRouter);
module.exports=app;