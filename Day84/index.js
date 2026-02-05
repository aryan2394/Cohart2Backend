const express=require("express");
const app=express()
// dekho basiically abhi kya huwa hai ki aapne server bana diyaq hai lekin aapne server ko start nahi kiyta hai 

app.get("/",(req,res)=>
{
    // humar first route hai jispe hum response bhejeneg ahgar koi user data request karta hai from our server 
    res.send("shri ji and lal ju")
})
// ab aapne server create karke start kar diya hai ab aap kisi bhi routes pe data le sakte ho from our server 
app.listen(3000);