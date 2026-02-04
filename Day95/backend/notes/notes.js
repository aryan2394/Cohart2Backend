// app.use(express.static("./public")):matlab ki ye middleware ye karega ki aapke public folder ki saari chzzon ko publicly access karne ko allowed kar dega

// aapne jo code likha tha ki res.sendFile(path.join(__dirname,"..","/public/index.html")) toh ye sirf index.html file ko bhejega browser ko lekin uske andar jo script tag mein index.js aur style.css file ka reference hai wo load nahi hoga jab tak ki hum unhe publicly access karne na dein isliye humne app.use(express.static("./public")) likha taaki public folder ki saari files ko publicly access kar sakein
// jaise agar aap browser mein jaake http://localhost:3000/style.css likhenge toh wo style.css file ko access kar payenge bina kisi rok tok ke kyunki humne app.use(express.static("./public")) likha hua hai
// ya humne ek picture unsplash se download kiya hai aur usse public folder mein rakh diya hai toh hum usse bhi browser mein http://localhost:3000/your-image-name.jpg likhkar access kar sakte hain bina kisi rok tok ke
// because express.static middleware humare public folder ki saari files ko publicly access karne ko allow kar deta hai

// lekin itna hum kar hi kyon rahe hai direclt frontend ko vercel and backend ko render.com pe host karne ke liye taaki humara backend bhi chal raha ho aur frontend bhi chal raha ho bina kisi dikkat ke isliye humne dono ko ek hi server pe host karne ke liye ye setup kiya hai
// ye isliye kiya because agar hum frontend agar deploy karenge and backend alag toh kharacha jyada aayega aur manage karna bhi mushkil ho jayega isliye humne dono ko ek hi server pe host karne ke liye ye setup kiya hai

