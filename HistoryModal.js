import React from 'react';
import Modal from 'react-modal';
import './InfoModal.css';

Modal.setAppElement('#root');

function HistoryModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="History of CKD"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>History of CKD</h2>
      <p>
        Chronic Kidney Disease (CKD) has been a recognized medical condition for centuries, with historical references dating back to ancient civilizations like Egypt and Greece. The understanding of CKD has evolved significantly over time. Early descriptions often linked kidney ailments to observable symptoms like edema and uremia. In the 19th and 20th centuries, medical advancements, including the invention of the microscope and the development of renal biopsy techniques, allowed for a more precise understanding of kidney pathologies.
      </p>
      <button onClick={onRequestClose} className="close-button">Close</button>
    </Modal>
  );
}

export default HistoryModal;
