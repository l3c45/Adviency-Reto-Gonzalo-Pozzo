import { useState, useEffect } from "react";
import bkgnd from "./assets/background.jpeg";
import "./App.css";
import useModal from "./hooks/useModal";
import Modal from "./components/Modal";
import PrevModal from "./components/PrevModal";
import { nanoid } from "nanoid";
import Sound from "./components/Sounbd";
import Snowfall from "react-snowfall";

//import { req } from "./API/request";
//import Loading from "./components/Loading";

function App() {

  const savedGifts = JSON.parse(localStorage.getItem("gifts"));
  const [gifts, setGifts] = useState(savedGifts || []);
  const [prev, setPrev] = useState(false);
  const { isVisible, toggleModal, defaultData, toggleModalEdit, duplicate } =
    useModal();

  useEffect(() => {
    localStorage.setItem("gifts", JSON.stringify(gifts));
  }, [gifts]);

  const toggle = () => {
    setPrev(!prev);
  };

  const addGift = (gift) => {
    if (gift.name.length !== 0) {
      const temp = [...gifts];
      const filtered = temp.filter((item) => item.id !== gift.id);

      if (filtered.length === temp.length) {
        const id = nanoid();
        const obj = { ...gift, id };
        temp.push(obj);
        setGifts(temp);
      } else {
        filtered.push(gift);
        setGifts(filtered);
      }
    } else {
      console.log("repetido o vacio");
    }
  };

  const deleteGift = (id) => {
    const temp = [...gifts];
    const deleted = temp.filter((gift) => gift.id !== id);
    setGifts(deleted);
  };

  return (
    <div
      style={{ backgroundImage: `url(${bkgnd})`, backgroundSize: "cover" }}
      className="App"
    >
      <Snowfall snowflakeCount={200} />
      <PrevModal isVisible={prev} hideModal={toggle} gifts={gifts} />
      <Modal
        isVisible={isVisible}
        hideModal={toggleModal}
        add={addGift}
        data={defaultData}
      />

      {
        <div className="list">
          <Sound></Sound>
          <h1>Regalos:</h1>

          <button className="openModal" onClick={() => toggleModal()}>
            Agregar Regalo
          </button>

          <ul>
            {gifts.map((gift, i) => {
              return (
                <li key={gift.id}>
                  <img className="giftPic" alt="Gift" src={gift.url}></img>
                  <div className="text">
                    <span className="line">
                      {gift.name}
                      {gift.quantity !== ""
                        ? ` ${gift.quantity}u     --$${(
                            gift.price * gift.quantity
                          ).toFixed(2)}`
                        : null}
                    </span>
                    <span className="line who">
                      {gift.user ? gift.user : null}
                    </span>
                  </div>
                  <div className="buttonsContainer">
                    <button
                      onClick={() => toggleModalEdit(gift)}
                      className="btn editBtn"
                    >
                      E
                    </button>
                    <button onClick={() => duplicate(gift)} className="btn editBtn">
                      D
                    </button>
                    <button
                      onClick={() => deleteGift(gift.id)}
                      className="btn deleteBtn"
                    >
                      X
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          {gifts.length === 0 ? (
            <p className="emptyList">
              No Hay regalos en la lista. Por que no agragas alguno?
            </p>
          ) : (
            <div className="footer">
              <span className="total">
                TOTAL:{" "}
                {gifts
                  .reduce((acc, val) => {
                    return acc + val.price * val.quantity;
                  }, 0)
                  .toFixed(2)}
              </span>

              <button onClick={() => setGifts([])} className="deleteAll">
                Borrar todos
              </button>
              <button
                onClick={() => {
                  toggle();
                }}
                className="previsualize"
              >
                Previsualizar
              </button>
            </div>
          )}
        </div>
      }
    </div>
  );
}

export default App;
