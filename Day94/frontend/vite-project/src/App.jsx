import React from "react"
import { useState } from "react";
import axios from "axios"
import { useEffect } from "react";
const App=()=>
{
  const [arr,setarr]=useState([]);
  async function fetchData()
  {
    await axios.get("http://localhost:3000/api/notes/")
    .then((res)=>
    {
      console.log(res.data);
      setarr(res.data.notes);
    })
  }
  async function handleSubmit(e)
  {
     e.preventDefault();
    //  console.dir(e);
     let {title,description}=e.target.elements;
     console.log(title.value,description.value);
    //  ab hum naya notes banayanege iss title and description ki madad se 
    axios.post("http://localhost:3000/api/notes",{
      title:title.value,
      description:description.value
    })
    .then((res)=>
    {
      console.log(res.data);
      // abhi tak dekho ye databse mein save toh ho jayega lekin wo humare screen pe reflect nahi karega why beacuse abhi tak array mein pahle wale hi elements hai toh what to do 
      // call fetchdata function wo ap call karega get wala and get all the data from the databse and set the array of updated databse and state change therefore app rerender therefore map chala and saare lements wapas se map ho gaye
      fetchData();
    })
    title.value="";
    description.value="";
    // dekho hum data jab postman se bhej rahe the usmein title and description tha and hum usmein vakue bhejte the in the form of json 
    // waise hi hum abhi bhi bhej rahe hai by post method of axios 
  }
  function handleDelete(id)
  {
    axios.delete("http://localhost:3000/api/notes/"+id)
    .then((res)=>
    {
      console.log(res.data);
      fetchData()
    })
  }
  useEffect(()=>
  {
    // as fetchdata function mein baar state of arr change hoga isliye then render componnent of app usse bachne ke liye we use 
    // the useeffect taaki buss ek baar humara app render ho and data aa jaaye 
    fetchData();
  },[])
    return (
      <>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder="enter title" name="title" />
        <input type="text" placeholder="enter description" name="description" />
        <button type="submit">Submit</button>
      </form>
      <div className="parent">
        {arr.map((ele,idx)=>
        {
          return (
            <div className="child" key={idx}>
              <h1>{ele.title}</h1>
              <p>{ele.description}</p>
              <button onClick={()=>handleDelete(ele._id)}>Delete Note</button>
            </div>
          )
        })}
      </div>
      </>
    )
}
export default App;