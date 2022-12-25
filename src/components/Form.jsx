import React, { useState } from "react";

function Form({ add, close, defaultData }) {
  const [input, setInput] = useState(defaultData);
  const randomGifts=["Pelota","Reloj","Pulsera"]
  const saveGift = (e) => {
    e.preventDefault();
    add(input);
    setInput(defaultData);
    close();
  };

  const random =(e)=>{
    
    e.preventDefault()
    const randomIndex=Math.floor(Math.random()*randomGifts.length)
    
    setInput(prev=>{return{
      ...prev,
      name:randomGifts[randomIndex]
    }})
  }
  return (
    <form className="giftForm" onSubmit={(e) => saveGift(e)}>
      <div className="giftInputGroup">
        <input
          placeholder="Regalo"
          className="giftInputName"
          onChange={(e) =>
            setInput((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
          type={"text"}
          value={input.name}
        ></input>
        <button className="randomBtn" onClick={(e)=>random(e)}>Sorprendeme!</button>
      </div>
      <input
        placeholder="Destinatario"
        className="giftInput"
        onChange={(e) =>
          setInput((prev) => {
            return { ...prev, user: e.target.value };
          })
        }
        type={"text"}
        value={input.user}
      ></input>
      <input
        placeholder="Imagen"
        className="giftInput"
        onChange={(e) =>
          setInput((prev) => {
            return { ...prev, url: e.target.value };
          })
        }
        type={"url"}
        value={input.url}
      ></input>
      <input
        placeholder="Precio"
        className="giftInput"
        onChange={(e) =>
          setInput((prev) => {
            return { ...prev, price: e.target.value };
          })
        }
        type={"number"}
        value={input.price}
      ></input>
      <input
       placeholder="Cantidad"
        className="giftInput giftQuantity"
        onChange={(e) =>
          setInput((prev) => {
            return { ...prev, quantity: e.target.value };
          })
        }
        type={"number"}
        value={input.quantity}
      ></input>

      <button className="giftButton" type="submit">
        Añadir
      </button>
    </form>
  );
}

export default Form;
