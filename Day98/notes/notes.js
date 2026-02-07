// hum ismein cookies ki madad se jo server ne store kiya tha while regsietering user usse ab user ko check karenge ki user kaun hai 
// req.cookies

// ab humein login feature banana hai matlan ki agar user name and password daale toh wo ligin ho jaaye 
// imsien kya kya kya hota hai 
// dekho user name and password ke saath request karega and if verified by our server the login suceesful

// agar verifed then humein ab usse naya token banake return kar dena toh ab jab bhi wo aayega and request karega then new token se hi rqeuest karega


// authRouter.post("/register",async (req,res)=>
    // ye jo hum likhte hai itne din se async (req,res)=> iske kai  naam hai 
//      1:function 2:fat arrow function 3:callback 4:controller

// Controller:ye aisa function hota hai jab hi chalega jab particular api pe request aayegi then 

// PAHLE EK BAAR SAMAJHTE HAI DATA LEAK KYA HOTA HAI 
// matlan ki jab bhi hum apne server pe data store karte hai toh wo data kisi bhi tarah se leak ho gaya hai and hacker ke paas ab humare accoun ki details aa gayi hai toh data leak kehlata hai

// data leak se bachne ke liye hum kya kar sakte hai ki jab bhi user register kare toh uska password ko hash kar dete hai
// hash:matlab ki hum apne password ko aise format me convert kar dete hai jisse ki wo readable na ho aur hacker ke paas agar data leak ho bhi jaye toh bhi wo password ko read nahi kar payega

// Some hash property:
// 1;agar input same hoga then hash output bhi same hoga 
// 2:hash irreversible hota hai matlab ki agar aapne password ko hash kar diya toh usse wapas original password me convert nahi kar sakte hai

// agar hash apssword se original password mein convert ho hi jaata toh hum hash hi kyun use karte hai