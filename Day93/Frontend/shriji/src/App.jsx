import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
const App = () => {
  const [arr,setarr]=useState([
    {
      "title":"shri ji",
      "description":"shri ji description",
    },
    {
      "title":"shri ji and lal ju",
      "description":"shri ji descriptionn and lal ju description",
    },
    {
      "title":"sajni ju",
      "description":"sajni ju description",
    },
    {
      "title":"poojya gurudev",
      "description":"shri ji and kelikunj",
    }
  ])

  // YAHA HUM DUMMY DATA USE KAR RAHE HAI BUT 
  // ACTUALLY DATA IS PRESENT IN DATABSE IN DIFFERNT URL 
  // TOH WE HAVE TO USE THE AXIOS 

  // useeffect:kyon dekho aapne call kiya url frontend ko usne state change toh app render huwa and then again poora aap chala then again api call then again render app and these loop continues 
  // ilsiye we use the useeffect taaki hum sirf apne url ko ek baar call karein buss
  
  function fetchData()
  {
    axios.get("http://localhost:3000/api/notes")
    .then((res)=>
    {
      setarr(res.data.notes);
    })
  }
  useEffect(()=>
  {
  //   axios.get("http://localhost:3000/api/notes/")
  // .then((res)=>
  // {
  //   // jab bhi data backend se frontend pe aata hai then we get the data in res.data
  //   console.log(res.data);
  //   setarr(res.data.notes);
  //   // isse ye error dega ye ki aap differnt url pe ho and different url ko access karna chah rahe ho 
  //   // these is aginst the cors policy matlab ki on running one url you cannot access data from another url
  // })
      fetchData()
  },[])
  return (
   <div className="parent">
    {arr.map((ele,idx)=>
    {
      return <div className="child" key={idx}>
        <h1>{ele.title}</h1>
        <p>{ele.description}</p>
      </div>
    })}
   </div>
  )
}

export default App
