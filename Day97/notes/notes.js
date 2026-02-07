// dekho hum jo bhi humara routes banayenge wo app mein nahi banayenge warna ganda ho jayaega and bada bhi because baad mein usmein bahut saari cheezein aayegi

// toh hum ek routes banayenge folder and usmein saare routes rakhaenge 

// jab token ban jaat hai and jwt sign kar deta hai with user data and jwt secret toh ab ye register kaam ho gaya hai 

// ab login ke time pe user apne adata ke saath token bhi send karega taaki server verify kar sakein ki ye mera i user hai 
// toh uske liye hum kya kar sakte hai ki server kya karta hai ki user ke browser mei cookies storage mein token and data sotre kar deta hai taaki jab bhi 
// user login request karein then we can check his token in browser cookies and data and we can verify that humara user authenticated hai 

// beacuse server can raed and write on the client side browser in the cookies 

// Easy Memory Trick

// 🧠
// 400 → Fault in data
// 409 → data Already exists (clAsh)