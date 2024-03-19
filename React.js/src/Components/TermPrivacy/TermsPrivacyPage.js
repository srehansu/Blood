import React from 'react';
import './TermsPrivacyPage.css';

const TermsPrivacyPage = () => {
  return (
    <div className="terms-privacy-container">
      <h1>Terms of Service and Privacy Policy</h1>
      <section className="terms-section">
        <h2>Terms of Service</h2>
        <p>These terms govern your use of the Blood Donors Community website...</p>
        {/* Add more terms of service content */}
      </section>
      <section className="privacy-section">
        <h2>Privacy Policy</h2>
        <p>Your privacy is important to us...</p>
        {/* Add more privacy policy content */}
      </section>
    </div>
  );
};

export default TermsPrivacyPage;
