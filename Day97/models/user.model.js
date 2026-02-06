const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        // lekin humein wo user ko acha response karna hai agar email alraedy exists karta ho warna internal error dikhayega jo sahi nahi hai humare paas
        
    },
    password:String,
})


const userModel=mongoose.model("users",userSchema);
module.exports=userModel;