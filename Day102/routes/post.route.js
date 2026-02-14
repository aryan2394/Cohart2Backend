const express=require("express");
const postRouter=express.Router();
const postController=require("../controllers/post.controller.js");
// api is api/posts/ 
// these is a proteced api matlba jsika aacount hai(token hai) sirf wahi post craete kar sakta hai 
const multer=require("multer");
const upload=multer({storage:multer.memoryStorage()})
postRouter.post("/",upload.single("image"),postController.createPostController);
module.exports=postRouter;