// create your App component here
import React,{useState,useEffect} from 'react'

function App() {
const [img,setImg]=useState("");
const [received,setReceived]=useState(false);


  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random").then(res=>res.json()).then(data=>{setImg(data.message)
                setReceived(true)} )
  }, [])

  return (
    <div>
      {received?<img src={img} alt="A Random Dog"/>: <p>Loading...</p>}
    </div>
  )
}

export default App

