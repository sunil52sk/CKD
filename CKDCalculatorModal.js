import React from 'react';
import Modal from 'react-modal';
import CKDCalculator from './CKDCalculator'; // Import CKDCalculator component
import './InfoModal.css'; // Reuse existing modal styles

Modal.setAppElement('#root'); // Important for accessibility reasons

function CKDCalculatorModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="CKD Calculator"
      className="modal"
      overlayClassName="overlay"
    >
      <CKDCalculator />
      <button onClick={onRequestClose} className="close-button">Close</button>
    </Modal>
  );
}

export default CKDCalculatorModal;
