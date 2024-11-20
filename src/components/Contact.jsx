import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { Runtime, Inspector } from 'https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js';
import define from 'https://api.observablehq.com/@d3/disjoint-force-directed-graph/2.js?v=4';

function Contact({ darkMode }) { // Add darkMode prop
  const chartRef = useRef(null);

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(define, (name) => {
      if (name === 'chart') {
        return new Inspector(chartRef.current);
      }
    });
  }, []);

  const [result, setResult] = useState("");
  const [val, setVal] = useState(null); // Initialize val as a state variable

  const OTP = () => {
    const min = 1000;
    const max = 9999;
    const otpValue = Math.floor(Math.random() * (max - min + 1)) + min;
    setVal(otpValue); // Update the val state variable
    alert(`Your OTP is ${otpValue}`);
    document.getElementById("verify-otp").value = otpValue;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const otp1 = document.getElementById("verify-otp").value;
    const otp2 = parseInt(otp1, 10); // Specify the radix for parseInt
    if (isNaN(otp2)) {
      alert("Enter the OTP");
    } else if (otp2 === val) {
      setResult("Sending....");
      const formData = new FormData(event.target);
      formData.append("access_key", "1ec15fde-8abd-4e12-8763-5c260f3a12c2");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } else {
      alert("Your OTP is Wrong please try again!");
    }
  };

  return (
    <div id="contact" className={`email-container ${darkMode ? 'dark' : ''}`}> {/* Apply dark mode class */}
      <div>
        <span className='result-data'>{result}</span>
        <form onSubmit={onSubmit} name="emailform" className={`left-container ${darkMode ? 'dark' : ''}`}> {/* Apply dark mode class */}
          <h1 className={`contact-title ${darkMode ? 'dark' : ''}`}>Contact Us</h1> {/* Updated title */}

          <input type="text" className={`input-fields ${darkMode ? 'dark' : ''}`} name="username" placeholder="Enter your Name" required />
          <input type="email" className={`input-fields ${darkMode ? 'dark' : ''}`} name="email" placeholder="Enter your email" required />
          <textarea name="message" className={`msg-field ${darkMode ? 'dark' : ''}`} placeholder="Enter your message" required></textarea>
          <button type="submit" className={`submit-btn ${darkMode ? 'dark' : ''}`}>Submit</button>
        </form>
        <label className='otp-label'>
          <button type="button" className={`otp-btn ${darkMode ? 'dark' : ''}`} onClick={OTP}>Generate OTP</button> :
          <input type="text" className={`input-fields otp-field ${darkMode ? 'dark' : ''}`} name="verify-otp" id="verify-otp" placeholder="Enter OTP" required />
        </label>
      </div>
      <div className="right-container">
        <div ref={chartRef} id="observablehq-chart-56dfd81e" />
      </div>
    </div>
  );
}

export default Contact;
