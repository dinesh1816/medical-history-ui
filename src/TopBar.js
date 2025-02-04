import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import './TopBar.css';

function TopBar({ onToggleSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Add logout logic here (e.g., clear session, redirect to login page)
    alert('Logged out successfully!');
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to the Profile Page
  };

  return (
    <div className="top-bar">
      <button className="hamburger-icon" onClick={onToggleSidebar}>
        &#9776; {/* Hamburger icon */}
      </button>
      <div className="profile-icon-container">
        <div className="profile-icon" onClick={toggleDropdown}>
          👤
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item" onClick={handleProfileClick}>
              <span>My Profile</span>
            </div>
            <div className="dropdown-item" onClick={handleLogout}>
              <FaSignOutAlt className="logout-icon" />
              <span>Logout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopBar;