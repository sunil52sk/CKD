import React, { useState } from 'react';
import './HomePage.css';
import InfoContent from './InfoContent';
import PreventiveContent from './PreventiveContent';
import CKDCalculator from './CKDCalculator';
import CKDDetection from './CKDDetection'; // Import CKDDetection

function HomePage({ user }) {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isPreventiveVisible, setIsPreventiveVisible] = useState(false);
  const [isCKDCalculatorVisible, setIsCKDCalculatorVisible] = useState(false);
  const [isCKDDetectionVisible, setIsCKDDetectionVisible] = useState(false); // State for CKD Detection visibility

  const toggleInfo = () => setIsInfoVisible(!isInfoVisible);
  const togglePreventive = () => setIsPreventiveVisible(!isPreventiveVisible);
  const toggleCKDCalculator = () => setIsCKDCalculatorVisible(!isCKDCalculatorVisible);
  const toggleCKDDetection = () => setIsCKDDetectionVisible(!isCKDDetectionVisible); // Toggle function for CKD Detection

  return (
    <div className="homepage-container">
      <h2>Care Bridge Innovations</h2>
      <h1>"EXPLORE THE PAGE TO KNOW MORE ABOUT CKD AND CALCULATE THE RISK"</h1>
      <img 
        src="https://images.ctfassets.net/pxcfulgsd9e2/1oDUtkU1aPBSW8L9v96G88/22e22e765ef229e63348156348084ba1/The_5_Stages_of_Chronic_Kidney_Disease_HN3600_Cover_Sized.png" 
        alt="CKD" 
        className="ckd-image"
      />
      <div className="button-container">
        <button onClick={toggleInfo} className="info-button">MORE ABOUT CKD</button>
        {/* <button onClick={toggleInfo} className="info-button">HISTORY OF CKD</button> */}
        <button onClick={togglePreventive} className="info-button">PREVENTIVE MEASURES</button>
        <button onClick={toggleCKDCalculator} className="info-button">CALCULATE CKD</button>
        <button onClick={toggleCKDDetection} className="info-button">CALCULATE STAGE</button> {/* Toggle CKD Detection */}
      </div>
      
      {isInfoVisible && (
        <div className="content-container">
          <InfoContent />
          <button onClick={toggleInfo} className="close-button">Close</button>
        </div>
      )}

      {isPreventiveVisible && (
        <div className="content-container">
          <PreventiveContent />
          <button onClick={togglePreventive} className="close-button">Close</button>
        </div>
      )}
      
      {isCKDCalculatorVisible && (
        <div className="ckd-calculator-container">
          <CKDCalculator />
          <button onClick={toggleCKDCalculator} className="close-button">Close</button>
        </div>
      )}
      
      {isCKDDetectionVisible && (
        <div className="ckd-calculator-container">
          <CKDDetection />
          <button onClick={toggleCKDDetection} className="close-button">Close</button>
        </div>
      )}

      <br /><br /><br /><br /><br /><br />
      <h3>Contact a Specialist</h3>
      <input className="cool-input" type="text" placeholder="Enter your email" />
      <button className="cool-button">Subscribe</button>
    </div>
  );
}

export default HomePage;
