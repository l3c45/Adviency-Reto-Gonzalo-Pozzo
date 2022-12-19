import React, { useState } from "react";

function Form({ add }) {
  const [input, setInput] = useState({ name: "", quantity: "" });

  const saveGift = (e) => {
    e.preventDefault();
    add(input);
    setInput({ name: "", quantity: "" });
  };
  return (
    <form className="giftForm" onSubmit={(e) => saveGift(e)}>
      <input
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
