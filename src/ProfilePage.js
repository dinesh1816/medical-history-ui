import React, { useState } from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import Sidebar from './SideBar';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaIdCard, FaTint } from 'react-icons/fa'; // Import icons
import './ProfilePage.css';

function ProfilePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample patient data
  const patientDetails = {
    name: 'John Doe',
    age: 35,
    contactNumber: '+1 123-456-7890',
    uniqueId: 'PAT123456',
    address: '123 Main St, Springfield, IL, 62701',
    email: 'johndoe@example.com',
    bloodGroup: 'O+',
    gender: 'Male',
    dateOfBirth: '1988-05-15',
  };

  return (
    <div className="profile-page">
      {/* Top Bar */}
      <TopBar onToggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {/* Main Content */}
      <div className="main-content">
        <h2 className="profile-title">My Profile</h2>
        <div className="profile-details">
          {/* Personal Information Card */}
          <div className="profile-card">
            <div className="card-header">
              <FaUser className="card-icon" />
              <h3>Personal Information</h3>
            </div>
            <div className="card-body">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">{patientDetails.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Age:</span>
                <span className="detail-value">{patientDetails.age}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Gender:</span>
                <span className="detail-value">{patientDetails.gender}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Date of Birth:</span>
                <span className="detail-value">{patientDetails.dateOfBirth}</span>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="profile-card">
            <div className="card-header">
              <FaPhone className="card-icon" />
              <h3>Contact Information</h3>
            </div>
            <div className="card-body">
              <div className="detail-item">
                <span className="detail-label">Contact Number:</span>
                <span className="detail-value">{patientDetails.contactNumber}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{patientDetails.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Address:</span>
                <span className="detail-value">{patientDetails.address}</span>
              </div>
            </div>
          </div>

          {/* Medical Information Card */}
          <div className="profile-card">
            <div className="card-header">
              <FaIdCard className="card-icon" />
              <h3>Medical Information</h3>
            </div>
            <div className="card-body">
              <div className="detail-item">
                <span className="detail-label">Unique ID:</span>
                <span className="detail-value">{patientDetails.uniqueId}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Blood Group:</span>
                <span className="detail-value">{patientDetails.bloodGroup}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProfilePage;