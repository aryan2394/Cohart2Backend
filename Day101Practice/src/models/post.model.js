const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    "caption":{
        type:String,
        default:""
    },
    "imageUrl":{
        type:String,
        required:[true,"required image for posting"]
    },
    "user":{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"user is required to create post"]
    }
})
const postModel=mongoose.model("post",postSchema);
module.exports=postModel;