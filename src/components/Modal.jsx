import React from "react";
import '../scss/components/_modal.scss'

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
