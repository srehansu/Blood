import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/FooterPage/Footer';
import HomePage from './Components/Home/HomePage';
import AboutUsPage from './Components/AboutUsPage/AboutUsPage';
import DonateBloodPage from './Components/DonateBloodPage/DonateBloodPage';
import FindDonorsPage from './Components/FindDonorsPage/FindDonorsPage';
import RegisterLoginPage from './Components/RegisterLoginPage/RegisterLoginPage';
import ProfileDashboardPage from './Components/ProfileDashboardPage/ProfileDashboardPage';
import BlogPage from './Components/BlogPage/BlogPage';
import FAQsPage from './Components/FAQs_Page/FAQ';
import ContactUsPage from './Components/ContactUs/Contact';
import TermsPrivacyPage from './Components/TermPrivacy/TermsPrivacyPage';
import Navbar from './Components/NavbarPage/Navbar';
import './App.css'; // Import App.css for general styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/donate" element={<DonateBloodPage />} />
            <Route path="/find-donors" element={<FindDonorsPage />} />
            <Route path="/login" element={<RegisterLoginPage />} />
            <Route path="/profile" element={<ProfileDashboardPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/terms-privacy" element={<TermsPrivacyPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
