import bkgnd from "./assets/background.jpeg";
import "./App.css";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [gifts, setGifts] = useState(["Reloj","Tablet","Pelota"])

  const addGift=(gift)=>{
    const temp=[...gifts]
    if(gift.length!==0 && !gifts.includes(gift)){
      temp.push(gift)
      setGifts(temp)
    }else{
      console.log("repetido o vacio")
    }
    
  }

  const deleteGift=(index)=>{
    const temp=[...gifts]
    const deleted=temp.filter((gift,i)=>i!==index)
    setGifts(deleted)
  }
  return (
    <div
      style={{ backgroundImage: `url(${bkgnd})`, backgroundSize: "cover" }}
      className="App"
    >
      <div className="list">
        <h1>Regalos:</h1>
       <Form add={addGift}/>

        <ul>
        {
          gifts.length===0?<p className="emptyList">No Hay regalos en la lista. Por que no agragas alguno?</p>:null
        }
        {gifts.map((gift,i)=>{
          return <li key={i}  >{gift}<button onClick={()=>deleteGift(i)} className="deleteBtn">X</button></li>
        })}
          
        </ul>
        <button onClick={()=>setGifts([])} className="deleteAll">Borrar todos</button>
      </div>
    </div>
  );
}

export default App;
