import React, { useState } from "react";

function Form({ add, close, defaultData }) {
  const [input, setInput] = useState(defaultData);
  const saveGift = (e) => {
    e.preventDefault();
    add(input);
    setInput(defaultData);
    close();
  };
  return (
    <form className="giftForm" onSubmit={(e) => saveGift(e)}>
      <input
     
        placeholder="Regalo"
        className="giftInput"
        onChange={(e) =>
          setInput((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
        type={"text"}
        value={input.name}
      ></input>
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
        className="giftQuantity"
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
