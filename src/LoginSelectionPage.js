import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSelectionPage.css';

function LoginSelectionPage() {
  const navigate = useNavigate();

  const handleDoctorLogin = () => {
    navigate('/doctors-login'); // Redirect to Doctor's Login Page
  };

  const handlePatientLogin = () => {
    navigate('/patients-login'); // Redirect to Patient's Login Page (default route)
  };

  return (
    <div className="login-selection-page">
      <div className="selection-container">
        <h2>Welcome to HealthCare</h2>
        <p>Please select your role to continue:</p>
        <div className="selection-buttons">
          <button className="doctor-button" onClick={handleDoctorLogin}>
            Doctor Login
          </button>
          <button className="patient-button" onClick={handlePatientLogin}>
            Patient Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginSelectionPage;