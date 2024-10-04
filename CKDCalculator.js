import React, { useState } from 'react';
import './CKDCalculator.css';

const CKDCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [name, setName] = useState('');
  const [eGFR, setEGFR] = useState(null);
  const [serumCreatinine, setSerumCreatinine] = useState('');
  const [hasCKD, setHasCKD] = useState();

  const calculateEGFR = () => {
    // Correct calculation with proper exponentiation
    const k = 1;
    const eGFRValue = 175* (serumCreatinine ** -1.154) * (age ** -0.203) *k*(gender === 'female' ? 0.742 : 1);
    setEGFR(eGFRValue);
    if(eGFRValue < 90)
    {
      setHasCKD(true);
    }
    else{
      setHasCKD(false);
    }
  };

  return (
    <div className="ckd-calculator-container">
      <h2>CKD Calculator</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input 
          type="number" 
          id="age" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          placeholder="Enter Age"
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select 
          id="gender" 
          value={gender} 
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="serumCreatinine">Serum Creatinine</label>
        <input 
          type="number" 
          id="serumCreatinine" 
          value={serumCreatinine} 
          onChange={(e) => setSerumCreatinine(e.target.value)} 
          placeholder="Enter Serum Creatinine"
        />
      </div>
      <button className="submit-button" onClick={calculateEGFR}>
        Submit
      </button>
      {eGFR !== null && <p className="result">eGFR: {eGFR}</p>}
      {hasCKD !== undefined && <p className="result">{hasCKD ? "You have CKD" : "You do not have CKD"}</p>}
    </div>
  );
};

export default CKDCalculator;
