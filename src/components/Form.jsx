import React,{useState} from 'react'

function Form({add}) {
    const [input, setInput] = useState("")


   const saveGift=(e)=>{
    e.preventDefault()
        add(input)
        setInput("")
     }
  return (
    <form className="giftForm" onSubmit={(e)=>saveGift(e)}>
          <input className="giftInput" onChange={(e)=>setInput(e.target.value)} type={'text'} value={input}></input>
          <button className="giftButton" type='submit'>Añadir</button>
        </form>
  )
}

export default Form