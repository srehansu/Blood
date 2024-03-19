// ContactUs.js
import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, feel free to reach out to us!</p>
      <div className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </div>
    </div>
  );
};

export default ContactUs;
