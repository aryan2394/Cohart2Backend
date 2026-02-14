const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    "caption":{
        type:String,
        default:""
    },
    "imageUrl":{
        type:String,
        required:[true,"imageurl is compulsory"]
    },
    "user":{
        ref:"users",
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"user is required to create post"],
    }
})
const postModel=mongoose.model("posts",postSchema);
module.exports=postModel;