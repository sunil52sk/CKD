import React, { useState } from 'react';
import './CKDDetection.css';

const CKDDetection = () => {
  const [eGFR, setEGFR] = useState(0);
  const [stage, setStage] = useState('');
  const [treatmentMeasures, setTreatmentMeasures] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const ckdStage = calculateCKDStage(eGFR);
    setStage(ckdStage);
  };

  const calculateCKDStage = (eGFR) => {
    let stage = '';
    if (eGFR >= 90) {
      stage = 'Non-CKD';
      setTreatmentMeasures("Eat healthily, exercise regularly and control your weight. These healthy practices are not new and definitely not specific to kidney health. Healthy kidneys like a healthy body.");
    } else if (eGFR >= 60 && eGFR < 90) {
      stage = 'Stage 1 CKD';
      setTreatmentMeasures('Control blood pressure, control blood glucose levels, quit smoking, exercise regularly, maintain a healthy weight, reduce salt intake, limit alcohol intake.');
    } else if (eGFR >= 45 && eGFR < 60) {
      stage = 'Stage 2 CKD';
      setTreatmentMeasures('All measures for Stage 1 CKD, manage anemia (low red blood cell count), control high cholesterol levels.');
    } else if (eGFR >= 40 && eGFR < 45) {
      stage = 'Stage 3A CKD';
      setTreatmentMeasures('All measures for Stage 2 CKD, control high blood pressure with medication, maintain healthy fluid balance, limit phosphorus intake, limit potassium intake.');
    } else if (eGFR >= 30 && eGFR < 40) {
      stage = 'Stage 3B CKD';
      setTreatmentMeasures('All measures for Stage 3A CKD, consider medications to reduce proteinuria (excessive protein in urine), consult with a kidney specialist (nephrologist).');
    } else if (eGFR >= 15 && eGFR < 30) {
      stage = 'Stage 4 CKD';
      setTreatmentMeasures('All measures for Stage 3B CKD, prepare for kidney failure treatment options (dialysis or transplant), consider referral to a transplant center, discuss advance care planning.');
    } else if (eGFR < 15) {
      stage = 'Stage 5 CKD';
      setTreatmentMeasures('All measures for Stage 4 CKD, initiate dialysis or prepare for kidney transplant, consider end-of-life care planning.');
    }
    return stage;
  };

  return (
    <div className="ckd-detection-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="eGFR">eGFR:</label>
          <input 
            type="number" 
            id="eGFR" 
            value={eGFR} 
            onChange={(e) => setEGFR(e.target.value)} 
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <p>{stage}</p>
      <p>Treatment Measures: {treatmentMeasures}</p>
    </div>
  );
};

export default CKDDetection;
