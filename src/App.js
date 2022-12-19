import bkgnd from "./assets/background.jpeg";
import "./App.css";
import Form from "./components/Form";
import { useState, useEffect } from "react";

function App() {
  const savedGifts = JSON.parse(localStorage.getItem("gifts"));
  const [gifts, setGifts] = useState(
    savedGifts || [
      { name: "Pelota", quantity: "" },
      { name: "Tablet", quantity: "" },
      { name: "Pulsera", quantity: "" },
    ]
  );

  const imgUrl="https://w7.pngwing.com/pngs/627/370/png-transparent-christmas-gift-gifts-to-send-non-stop-miscellaneous-ribbon-wedding.png"

  useEffect(() => {
    localStorage.setItem("gifts", JSON.stringify(gifts));
  }, [gifts]);

  const addGift = (gift) => {
    const temp = [...gifts];
    if (gift.name.length !== 0) {
      temp.push(gift);
      setGifts(temp);
    } else {
      console.log("repetido o vacio");
    }
  };

  const deleteGift = (index) => {
    const temp = [...gifts];
    const deleted = temp.filter((gift, i) => i !== index);
    setGifts(deleted);
  };
  return (
    <div
      style={{ backgroundImage: `url(${bkgnd})`, backgroundSize: "cover" }}
      className="App"
    >
      <div className="list">
        <h1>Regalos:</h1>
        <Form add={addGift} />

        <ul>
          {gifts.length === 0 ? (
            <p className="emptyList">
              No Hay regalos en la lista. Por que no agragas alguno?
            </p>
          ) : null}
          {gifts.map((gift, i) => {
            return (
              <li key={i}>
            <img className="giftPic" alt="Gift" src={gift.url || imgUrl}></img>
                {gift.name}
                {gift.quantity !== "" ? ` X${gift.quantity}` : null}
                <button onClick={() => deleteGift(i)} className="deleteBtn">
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <button onClick={() => setGifts([])} className="deleteAll">
          Borrar todos
        </button>
      </div>
    </div>
  );
}

export default App;
