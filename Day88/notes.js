// DEKHO HUM DATA KO KAISE RAKHE MATLAB OBVERALL KAISA HOGA DATA KA STRUCTURE AND FOLDER STRUCTURE 

// dekho app ka kaam hai server ko craETE KARNA AND SAARE ROUYTES BANANA AND ROUTES KA KAAM HAI KI HUM DATA KO HANDLE KARENGE KAISA DATA AAYEGA KAISA DATA JAEGA
// server.js:iska kaam hai serevr ko start karna AND LISTEN KARNA KI KAUNSA PORT PE SERVER KO SUNNA HAI

// phir npm run dev se server start karenge hum package.json likh ke uske script mein dev mein npx nodemon server.js likhenge

// WHEN TO USE THE Request.BODY AND Request.PARAMS 
// req.params: jab humein data chota ho AND DYNAMIC HO FROM CLIENT SIDE TO SERVER SIDE THEN WE USE REQ.PARAMS
// req.body: jab humein data client se hi bhejna ho lekin data bada ho to we use REQ.BODY

// dekho humne ek notes app banaya hai jismein hum notes create karenge, read karenge AND DELETE KARNE KA OPTION HAI

// HUMNE EK ARRAY BANAYA HAI arrnotes jismein hum saare notes ko store karenge

// HUMNE EK ROUTE BANAYA HAI POST /notes jismein hum note create karenge AND DATA KO REQ.BODY SE LEKE ARRAY MEIN PUSH KARENGE

// HUMNE EK ROUTE BANAYA HAI GET /notes jismein hum saare notes ko bhejenge client ko

// HUMNE EK ROUTE BANAYA HAI DELETE /notes/:id jismein hum note ko delete karenge based on id jo hum req.params se lenge

// HUMNE EXPRESS.JSON MIDDLEWARE USE KIYA HAI TAKI HUM JSON DATA KO HANDLE KAR SAKEN REQ.BODY SE

// HUMNE APP MODULE KO EXPORT KIYA HAI TAKI HUM SERVER.JS MEIN USE KAR SAKEN