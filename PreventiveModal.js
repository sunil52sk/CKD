import React from 'react';
import Modal from 'react-modal';
import './InfoModal.css';

Modal.setAppElement('#root');

function PreventiveModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Preventive Measures for CKD"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Preventive Measures for CKD</h2>
      <p>
        Preventive measures for CKD focus on managing risk factors such as hypertension, diabetes, and cardiovascular disease through lifestyle modifications, including a balanced diet, regular exercise, and smoking cessation. Early detection through regular screenings and maintaining proper hydration are also critical. Additionally, the use of medications to control blood pressure and blood sugar levels plays a vital role in preventing the progression of CKD. Public health initiatives and education campaigns continue to raise awareness about CKD, emphasizing the importance of early intervention and healthy living to reduce the incidence and impact of this chronic condition.
      </p>
      <button onClick={onRequestClose} className="close-button">Close</button>
    </Modal>
  );
}

export default PreventiveModal;
