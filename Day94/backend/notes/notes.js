// dekho frontend pe npm run build cha;laker hum saare html,css and js file jo bhi react ki thi usko backedn mein public folder ke andar le aaye hai 
// ab humein kay karna hai ki jo bhi page ho usmein huemin index.html file ko show karna hai beacuse wahi humare frontend ko show karta tha react mein in #root

// huymein poore ke poore html file ko bhejna hoga in res.sendFile(index.html) 
// lekin kaun se index.html because sendfile poora bsolute path maangta hai 70dev/userts/desktop 
// tyoh usse bachne ke liye we can us the require(path) jo ki humein jis bhi file mein hum hai waha tak ka path de detaq hai 

