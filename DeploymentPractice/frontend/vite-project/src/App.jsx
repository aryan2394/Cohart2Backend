import React from "react";
import { useState,useEffect } from "react";
import axios from "axios"
const App=()=>
{
    const [arr,setarr]=useState([]);
    function fetchnotes()
    {
      axios.get("http://localhost:3000/api/notes/")
      .then((res)=>
      {
        console.log(res.data.allnotes);
        setarr(res.data.allnotes);
      })
    }
    function handleUpdate(id)
    {
      let description=prompt("enter new description");
      axios.patch("http://localhost:3000/api/notes/"+id,{description})
      .then((res)=>
      {
        console.log(res.data);
        fetchnotes();
      })
    }
    function handleDelete(id)
    {
      axios.delete("http://localhost:3000/api/notes/"+id)
      .then((res)=>
      {
        console.log(res.data);
        fetchnotes();
      })
    }
    function handleForm(e)
    {
      e.preventDefault();
      axios.post("http://localhost:3000/api/notes/",{
        title:e.target.title.value,
        description:e.target.description.value,
      })
      .then((res)=>
      {
        setarr((prev)=>[...prev,res.data.note])
        console.log(res.data);
        e.target.title.value="";
        e.target.description.value="";
      })
    }
    useEffect(()=>
    {
      fetchnotes();
    },[])
    return(
      <>
      <form onSubmit={(e)=>handleForm(e)}>
        <input type="text" placeholder="enter title" name="title" />
        <input type="text" placeholder="enter description" name="description" />
        <button>Create Note</button>
      </form>
      <div className="parent">
        {arr.map((ele,id)=>
        {
          return (
            <div className="child" key={ele._id}>
              <h1>{ele.title}</h1>
              <p>{ele.description}</p>
              <div className="buttons">
                <button onClick={()=>handleUpdate(ele._id)}>Update note</button>
                <button onClick={()=>handleDelete(ele._id)}>Delete Note</button>
              </div>
            </div>
          )
        })}
      </div>
      </>
    )
}
export default App;