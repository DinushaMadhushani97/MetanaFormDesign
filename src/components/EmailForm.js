import React, { useState } from 'react';
import './EmailForm.css';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setError('');
    } else {
      setError('Please enter a valid email address');
    }
  };

  return (
    <div className="email-form-container">
      <div className="form-step">
        <span className="step-number">1</span>
        <span className="step-arrow">→</span> {/* Arrow added here */}
        <span className="step-text">Enter your email</span>
      </div>
      <p className="form-description">
        This will be used to contact you for the next steps.
      </p>
      <input 
        type="text" 
        className="email-input" 
        placeholder="Type here..." 
        value={email} 
        onChange={handleChange}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default EmailForm;
