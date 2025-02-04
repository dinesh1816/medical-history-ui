import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';

function Sidebar({ isOpen, onClose, selectedSection }) {
  const navigate = useNavigate();

  const handleSectionClick = (section) => {
    // Navigate to the corresponding route based on the section
    if (section === 'Allergies') {
      navigate('/allergies');
    } else if (section === 'Surgeries') {
      navigate('/surgeries');
    } else if (section === 'Diseases') {
      navigate('/diseases');
    } else if (section === 'Prescriptions') {
      navigate('/prescriptions');
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="sidebar-sections">
          <div
            className={`sidebar-section ${
              selectedSection === 'Allergies' ? 'selected' : ''
            }`}
            onClick={() => handleSectionClick('Allergies')}
          >
            Allergies
          </div>
          <div
            className={`sidebar-section ${
              selectedSection === 'Surgeries' ? 'selected' : ''
            }`}
            onClick={() => handleSectionClick('Surgeries')}
          >
            Surgeries
          </div>
          <div
            className={`sidebar-section ${
              selectedSection === 'Diseases' ? 'selected' : ''
            }`}
            onClick={() => handleSectionClick('Diseases')}
          >
            Diseases
          </div>
          <div
            className={`sidebar-section ${
              selectedSection === 'Prescriptions' ? 'selected' : ''
            }`}
            onClick={() => handleSectionClick('Prescriptions')}
          >
            Prescriptions
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;