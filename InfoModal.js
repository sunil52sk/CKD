import React from 'react';
import Modal from 'react-modal';
import './InfoModal.css';

Modal.setAppElement('#root'); // Important for accessibility reasons

function InfoModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="CKD Awareness Info"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>CKD Awareness Information</h2>
      <p>
        Adaptive hyperfiltration, often seen in kidney disease, may trigger changes in the RAAS, leading to increased production of angiotensin II. This hormone can promote LVH by stimulating cardiac muscle growth and remodeling. LVH, characterized by the thickening of the left ventricular wall, is a common consequence of uncontrolled hypertension, often associated with kidney failure.
      </p>
      <button onClick={onRequestClose} className="close-button">Close</button>
    </Modal>
  );
}

export default InfoModal;
