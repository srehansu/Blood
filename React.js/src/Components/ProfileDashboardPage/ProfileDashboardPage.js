import React from 'react';
import './ProfileDashboardPage.css';

const ProfileDashboardPage = () => {
  // Fetch user data or use mock data
  const userData = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    donations: [
      { date: '2022-03-01', bloodType: 'A+', location: 'City Hospital' },
      { date: '2022-04-15', bloodType: 'O-', location: 'Red Cross Center' },
    ],
  };

  return (
    <div className="profile-dashboard-container">
      <h2>Welcome, {userData.username}!</h2>
      <div className="user-info">
        <p><strong>Email:</strong> {userData.email}</p>
      </div>
      <div className="donation-history">
        <h3>Donation History</h3>
        <ul>
          {userData.donations.map((donation, index) => (
            <li key={index}>
              <p><strong>Date:</strong> {donation.date}</p>
              <p><strong>Blood Type:</strong> {donation.bloodType}</p>
              <p><strong>Location:</strong> {donation.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileDashboardPage;
