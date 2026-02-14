const postModel=require("../models/post.model.js");
async function createPostController(req,res)
{
    console.log(req.body,req.file);
    // undefined
    // /beacsue humara server req.body ko nahi padh sakta hai isliye json data ko read karne ke liye hume middleware use karna padta hai(express.json()) jise humne app.js me use kiya hai
    // and ab hum client se ek form data mein fileaur text data bhej rahe hai toh uske liye bhi hume ek middleware use karna padega jiska naam hai multer
    // ab humein apne file ko upload karne ke liye multer ka use karna padega toh uske liye humein multer ko install karna padega npm i multer
    // ab where to store our file in server or cloud?
    // solution:agar hum apne file ko server mein store karenge toh humein mehanga padega 
    // maanlo ek post hai user ke and uske 2000 followers hai and agar sabhi log ek uss post ko access karenge toh humare server pe load badh jayega aur agar hum apne file ko cloud mein store karenge toh humein mehanga padega lekin humare server pe load nahi badhega

}
module.exports={
    createPostController
}
