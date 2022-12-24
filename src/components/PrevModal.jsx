import * as React from "react";
import { createPortal } from "react-dom";
import "../Modal.css"






const PrevModal = ({ isVisible, hideModal,gifts }) => {
  
 
  return isVisible
    ? createPortal(
        <div className="overlay" >
        <div className="modal" id="print-content" >
        <h2 className="modalTitle" >Lista de Regalos</h2>
          
        <ul>
            
            {gifts.map((gift, i) => {
              return (
                <li key={gift.id}>
                  <img
                    className="giftPic"
                    alt="Gift"
                    src={gift.url }
                  ></img>
                  <div>
                    <span className="line">
                      {gift.name}
                      {gift.quantity !== ""
                        ? ` ${gift.quantity}u     `
                        : null}
                    </span>
                    <span className="line who">
                      {gift.user ? gift.user : null}
                    </span>
                  </div>
                 
                </li>
              
              );
            })}
          </ul>

          <button className="closeModal" onClick={hideModal}>
            Cancelar
          </button>
          <button className="print" onClick={()=> window.print()}>
            Imprimir
          </button>
         
        </div>
        </div>,
        document.body,
      )
    : null;
};export default PrevModal;