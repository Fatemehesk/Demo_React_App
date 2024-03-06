import React from "react";
import "./style.css";
const CostumModal = ({ onClose, title, body }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <span className="modal-close" onClick={() => onClose(false)}>
          X
        </span>
        <h5>{title}</h5>
        <div className="modal-body">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default CostumModal;