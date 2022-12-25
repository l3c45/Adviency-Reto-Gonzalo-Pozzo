import * as React from "react";
import { createPortal } from "react-dom";
import "../Modal.css"
import Form from "./Form";

const Modal = ({ isVisible, hideModal,add,data }) => {
  
  return isVisible
    ? createPortal(
        <div className="overlay" >
        <div className="modal">
        <h2 className="modalTitle">{data.title}</h2>
          <Form add={add} close={hideModal} defaultData={data.data}></Form>
          <button className="closeModal" onClick={hideModal}>
            Cancelar
          </button>
         
        </div>
        </div>,
        document.body,
      )
    : null;
};

export default Modal;