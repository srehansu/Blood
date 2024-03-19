import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <h2>How do I donate blood?</h2>
        <p>
          To donate blood, you can visit any blood donation center or blood drive
          event. Make sure to bring a valid ID and meet the eligibility criteria.
          Our staff will guide you through the donation process.
        </p>
      </div>
      <div className="faq-item">
        <h2>What are the eligibility criteria for blood donation?</h2>
        <p>
          The eligibility criteria for blood donation include age, weight, health
          condition, and lifestyle factors. You can find detailed information on
          eligibility requirements on our website.
        </p>
      </div>
      <div className="faq-item">
        <h2>How often can I donate blood?</h2>
        <p>
          The frequency of blood donation depends on various factors such as your
          health condition and the type of donation. In general, you can donate
          whole blood every 56 days and platelets every 7 days.
        </p>
      </div>
      {/* Add more FAQ items as needed */}
    </div>
  );
};

export default FAQ;
