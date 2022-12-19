import * as React from "react";
import { createPortal } from "react-dom";
import "../Modal.css"
import Form from "./Form";



const Modal = ({ isVisible, hideModal,add }) => {
  
 
  return isVisible
    ? createPortal(
        <div className="overlay" >
        <div className="modal">
        <h2 className="modalTitle">Nuevo Regalo</h2>
          <Form add={add} close={hideModal}></Form>
          <button className="closeModal" onClick={hideModal}>
            Cancelar
          </button>
         
        </div>
        </div>,
        document.body,
      )
    : null;
};export default Modal;