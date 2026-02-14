const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        unique:[true,"username alraedy exists"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"unqiue email is required email already exists"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    bio:String,
    profilePic:{
        type:String,
        default:"https://ik.imagekit.io/sbafdiwda/image?updatedAt=1770811642733"
    }
})
const userModel=mongoose.model("user",userSchema);
module.exports=userModel;