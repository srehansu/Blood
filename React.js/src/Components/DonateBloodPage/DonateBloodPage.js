// DonateBloodPage.js

import React, { useState } from 'react';
import './DonateBloodPage.css';

const DonateBloodPage = () => {
  // State variables for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [location, setLocation] = useState('');
  const [availability, setAvailability] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend or perform validation
    console.log('Form submitted!');
  };

  return (
    <div className="donate-blood-container">
      <h2>Donate Blood</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        {/* Similar input fields for Last Name, Email, Blood Type, etc. */}
        {/* Add more input fields as needed */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DonateBloodPage;
