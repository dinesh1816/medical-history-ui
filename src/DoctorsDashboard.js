import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorsDashboard.css';

function DoctorsDashboard() {
  const [patientId, setPatientId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    // Hardcoded valid patient ID
    const validPatientId = 'PAT123456';

    if (patientId === validPatientId) {
      // Redirect to the patient's medical details page
      navigate(`/patient-details/${patientId}`);
    } else {
      // Show error message for invalid patient ID
      setError('Invalid Patient ID');
    }
  };

  return (
    <div className="doctor-dashboard">
      <div className="dashboard-container">
        <h2>Doctor's Dashboard</h2>
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label htmlFor="patientId">Enter Patient's Unique ID</label>
            <input
              type="text"
              id="patientId"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              placeholder="Enter Patient ID"
              required
            />
          </div>
          {error && <div className="error-banner">{error}</div>}
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default DoctorsDashboard;