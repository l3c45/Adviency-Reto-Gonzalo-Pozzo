import { useState } from "react";
import { nanoid } from "nanoid";

const useModal = () => {
  const newGift = {
    title: "Nuevo Regalo",
    data: { name: "", quantity: "", user: "", price: "0.00",url:"https://picsum.photos/200" },
  };

  const [isVisible, setIsVisible] = useState(false);
  const [defaultData, setDefaultData] = useState(newGift);

  const toggleModal = () => {
    setDefaultData(newGift);
    setIsVisible(!isVisible);
  };

  const toggleModalEdit = (data) => {
    const obj = { data, title: "Editar Regalo" };
    setDefaultData(obj);
    setIsVisible(!isVisible);
  };
  const duplicate = (d) => {
    const data = { ...d, id: nanoid() };
    const obj = { data, title: "Nuevo Regalo" };
    setDefaultData(obj);
    setIsVisible(!isVisible);
  };
  return {
    isVisible,
    toggleModal,
    defaultData,
    toggleModalEdit,
    duplicate,
  };
};
export default useModal;
