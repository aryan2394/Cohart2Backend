import React, { useEffect, useState } from "react";
import axios from "axios"
function App()
{
  const [arr,setarr]=useState([]);
  function fetchData()
  {
    axios.get("http://localhost:3000/api/notes/")
    .then((res)=>
    {
      console.log(res.data.notes);
      setarr(res.data.notes);
    })
  }
  function handleSubmit(e)
  {
    e.preventDefault();
    let {title,description}=e.target.elements;
    console.log(title.value,description.value);
    axios.post("http://localhost:3000/api/notes/",{
      title:title.value,
      description:description.value,
    })
    .then((res)=>
    {
      console.log(res.data);
      fetchData();
    })
    title.value="";
    description.value="";
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
  function handleUpdate(id)
  {
    const newdescription=prompt("enter new description");
    axios.patch("http://localhost:3000/api/notes/"+id,{
      description:newdescription,
    })
    .then((res)=>
    {
      fetchData();
    })
  }
  useEffect(()=>
  {
      fetchData()
  },[])
    return(
      <>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder="enter title" name="title"/>
        <input type="text" placeholder="enter description" name="description" />
        <button>Create Note</button>
      </form>
      <div className="parent">
        {arr.map((ele,idx)=>
        {
            return(
              <div className="child" key={idx}>
                <h1>{ele.title}</h1>
                <p>{ele.description}</p>
                <div className="buttons">
                  <button onClick={()=>handleDelete(ele._id)}>Delete Note</button>
                <button onClick={()=>handleUpdate(ele._id)}>Update Note</button>
                </div>
              </div>
            )
        })}
      </div>
      </>
    )
}
export default App;