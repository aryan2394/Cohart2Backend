// AUTHETICATION SYSTEM 

// dekho har ek authentication  syetem mein 4 STEPS HOTE HAI 

// 1:authentication karna:identify karna ki user kaun hai jisne server pe request ki hai 
// example jaisse insagram ka server hai and usko x users ne request ki data ke liye to server ko ye pata hona chahiye ki kaunse user ne request ki hai
// taaki wo uss user ke hisab se data usko send kar sakein 

// 2:authorazation:ye decide karna ki kaunse user ko kya access dena hai
// example insagram mein kuch aise features hote hain jo sirf paid users ke liye hote hain to server ko ye decide karna hota hai ki kaunse user ko kaunse features ka access dena hai

// 3:validation:ye check karna ki jo data user ne bheja hai wo sahi format mein hai ya nahi
// example agar user ne apna email bheja hai to server ko ye check karna hota hai ki wo email sahi format mein hai ya nahi
// example:jaise bola ki login with mobile number and password to server ko ye check karna hoga ki mobile number mein sirf numbers hain ya nahi aur password mein kuch special characters hain ya nahi
// aisa toh nahi hai ki koi characters daal raha hai phone number mein and login kar raha hai

// 4:verification:ye confirm karna ki jo user ne apna data bheja hai wo sahi hai ya nahi
// example:jaise ki jab hum apna email id ya mobile number dete hain to humein ek otp ya verification link bheja jata hai taaki hum confirm kar sakein ki ye email id ya mobile number humara hi hai
// warna koi koi bhi 10 digit mobile number daal ke login kar sakta hai 

// How to perform authentication in a web application?

// dekho pahle ek example lete hai school ka jismewin bahut si facilities hai like library ,sports ground ,computer lab etc
// toh kya usko sirf strudenmts access karenge ya bahar ka koi bhi use kart sakta hai offcourse sirf students hi use karenge
// toh jab bhi koi student school mein aayega toh usko apna identity proof dikhana padega jaise ki school id card
// toh school waha pe check karega ki kya ye student hai ya nahi agar wo student hai toh usko andar jane dega aur wo school ki facilities ka use kar sakta hai
// agar wo student nahi hai toh usko andar nahi jane dega 
// is process ko authentication kehte hain

// ab school mein kai tarah ke students hote hain jaise ki regular students ,sports students ,computer students etc
// toh school ko ye decide karna hota hai ki kaunse student ko kaunse facilities ka access dena hai
// jaise ki regular students ko library ka access dena hai ,sports students ko sports ground ka access dena hai ,computer students ko computer lab ka access dena hai
// is process ko authorization kehte hain

// ab actual kiase hota hai 
// jab koi new user aata hai toh sabse pahle usko bola jaata hai ki register karo taaki hum aapko identify kar sakein and aapko access de sakein
// registration ke time pe user apna kuch data deta hai jaise ki username ,password ,email id ,mobile number etc

// Steps to perform authentication in a web application:

// 1:Registration:ye process hota hai jisme user apna data deta hai taaki wo humare system mein register ho sakein
// example:user apna username ,password ,email id ,mobile number etc deta hai
// toh hum uska data apne database mein store kar lete hain

// 2:and uske liye ek create karte hai ek id card taaki hum usko identify kar saein jisko kahte hain token ya session id

// toh ab jab bhi wo login karega tab wo apone data ke saath wo id card bhi bhejenga taaki server usko idetify kar sakein 

// yaha pe humara complete hota hai and server ab identify kar paata hai ki kaunse user ne request ki hai

// Steps to valiade data in a web application:

// jaise aapne data ke saath databse mein save kar diya and token bhi create kar diya and jab bhi user login karega toh wo apna data ke saath token bhi bhejega

// lekin lets understand wirth example school ki aap kaise identify karoge ki wo id card sahi hai ya nahi jaise maanlo kisi ne stamp same and same jaise qr code jaisa crate kare wo id card banake khus gaya tab 
// tab toh dikkat ho jayega because hum tab toh identify hi user sahi hai ya nahi nahi kar paenge

// isliye jab user regitsre karta hai and token bhejta hai toh JWT_SECRET SE SIGN KARKE BHEJTA USER KO TAAKI WO IDENTIFY KAR SAKEN KI JO ID CARD(TOKEN) REQUEST KAR RAHA HAI YE WO KYA Imaine server ne crate kiya hai ya nahi 
