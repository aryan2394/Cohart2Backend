import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react';
const App = () => {
  const [arr,setarr]=useState([]);
  function fetchData()
  {
      axios.get("https://cohart2backend-1.onrender.com/api/notes/")
      .then((res)=>
      {
          console.log(res.data);
          setarr(res.data.notes);
      })
  }
  useEffect(()=>
  {
    fetchData()
  },[])
  function handleSubmit(e)
  {
    e.preventDefault();
    let {title,description}=e.target.elements;
    console.log(title.value,description.value);
    axios.post("https://cohart2backend-1.onrender.com/api/notes/",{
      title:title.value,
      description:description.value,
    })
    .then((res)=>
    {
      console.log(res.data);
      fetchData()
    })
    title.value="";
    description.value=""
  }
  function handleDelete(id)
  {
      axios.delete("https://cohart2backend-1.onrender.com/api/notes/"+id)
      .then((res)=>
      {
        console.log(res.data);
        fetchData();
      })
      
  }
  return (
    <>
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input type="text" placeholder='enter title' name='title' />
      <input type="text" placeholder='enter description' name='description'/>
      <button>Create note</button>
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

export default App
