import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("agree", formData.agree ? "Yes" : "No");
  
    try {
      const response = await fetch("https://formsubmit.co/reddygopalkrishna4@gmail.com", {
        method: "POST",
        body: formDataToSend,
        headers: { Accept: "application/json" }
      });
  
      const result = await response.json();
      if (result.success) {
        alert("Form Submitted Successfully!");
        setFormData({ name: '', email: '', password: '', agree: false });
      } else {
        alert("Form Submission Failed!");
      }
    } catch (error) {
      alert("Network error! Please check your connection.");
    }
  };
  
  

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="e6c39bc3-61bd-403d-ae66-6737cf54ee0e" /> {/* Required for Web3Forms */}
          <div className="loginsignup-fields">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className='loginsignup-login'>
          Already have an account? <span>Login</span>
        </p>
        <div className="loginsignup-agree">
          <input 
            type="checkbox" 
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          <p>By Continuing, I agree to terms of use & privacy policy!</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
