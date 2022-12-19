import bkgnd from "./assets/background.jpeg";
import "./App.css";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";
import { nanoid } from "nanoid";
import { req } from "./API/request";
import Loading from "./components/Loading";

function App() {
  const savedGifts = JSON.parse(localStorage.getItem("gifts"));
  const [gifts, setGifts] = useState(
    savedGifts || []
  );
  const [loading, setLoading] = useState(false)
  const { isVisible, toggleModal, defaultData, toggleModalEdit } = useModal();
  const imgUrl =
    "https://w7.pngwing.com/pngs/627/370/png-transparent-christmas-gift-gifts-to-send-non-stop-miscellaneous-ribbon-wedding.png";

  useEffect(() => {
   // setLoading(true)
    //const gifts=req()
    //if(gifts){
    //  setGifts(gifts)
    //  setLoading(false)
    //}
    localStorage.setItem("gifts", JSON.stringify(gifts));
  }, [gifts]);

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
      <Modal
        isVisible={isVisible}
        hideModal={toggleModal}
        add={addGift}
        data={defaultData}
      />
      {loading?<Loading></Loading>:<div className="list">
        <h1>Regalos:</h1>

        <button  className="openModal" onClick={() => toggleModal()}>
          Agregar Regalo
        </button>

        <ul>
          {gifts.length === 0 ? (
            <p className="emptyList">
              No Hay regalos en la lista. Por que no agragas alguno?
            </p>
          ) : null}
          {gifts.map((gift, i) => {
            return (
              <li key={gift.id}>
                <img
                  className="giftPic"
                  alt="Gift"
                  src={gift.url || imgUrl}
                ></img>
                <div>
                  <span className="line">
                    {gift.name}
                    {gift.quantity !== "" ? ` ${gift.quantity}u     --$${gift.price*gift.quantity}` : null}
                  </span>
                  <span className="line who">
                    {gift.user ? gift.user : null}
                  </span>
                </div>
                <div>
                  <button
                    onClick={() => toggleModalEdit(gift)}
                    className="editBtn"
                  >
                    E
                  </button>
                  <button
                    onClick={() => deleteGift(gift.id)}
                    className="deleteBtn"
                  >
                    X
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <button onClick={() => setGifts([])} className="deleteAll">
          Borrar todos
        </button>
      </div>}
    </div>
  );
}

export default App;
