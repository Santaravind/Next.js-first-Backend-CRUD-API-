import axios from 'axios'
import React from 'react'

async function Home() {
  //this is working 
  // const res= await fetch("http://localhost:3000/api/routing")
  // const data=await res.json();
  
  const res= await axios.get("http://localhost:3000/api/routing")

  return (
    <div>
      {JSON.stringify(res.data)}
    </div>
  )
}

export default Home
