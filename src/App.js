import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './PatientLoginPage';
import AllergiesPage from './AllergiesPage';
import SurgeriesPage from './SurgeriesPage';
import DiseasesPage from './DiseasesPage';
import PrescriptionsPage from './PrescriptionsPage';
import ProfilePage from './ProfilePage';
import DoctorsLoginPage from './DoctorsLoginPage';
import LoginSelectionPage from './LoginSelectionPage';
import DoctorsDashboard from './DoctorsDashboard';
import PatientDetailsPage from './PatientDetailsPage';
import TopBar from './TopBar';
import Sidebar from './SideBar';
import Footer from './Footer';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        {/* Top Bar (Universal) */}
        <TopBar onToggleSidebar={toggleSidebar} />

        {/* Sidebar (Universal) */}
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<LoginSelectionPage />} />
          <Route path="/patients-login" element={<LoginPage />} />
          <Route
            path="/allergies"
            element={<AllergiesPage isSidebarOpen={isSidebarOpen} onClose={toggleSidebar}/>}
          />
          <Route path="/doctors-login" element={<DoctorsLoginPage />} />
          <Route
            path="/surgeries"
            element={<SurgeriesPage isSidebarOpen={isSidebarOpen} onClose={toggleSidebar}/>}
          />
          <Route path="/doctors-dashboard" element={<DoctorsDashboard />} /> 
          <Route
            path="/diseases"
            element={<DiseasesPage isSidebarOpen={isSidebarOpen} onClose={toggleSidebar}/>}
          />
          <Route path="/patient-details/:patientId" element={<PatientDetailsPage />} />
          <Route
            path="/prescriptions"
            element={<PrescriptionsPage isSidebarOpen={isSidebarOpen} onClose={toggleSidebar}/>}
          />
          <Route
            path="/profile"
            element={<ProfilePage isSidebarOpen={isSidebarOpen} onClose={toggleSidebar}/>}
          />
        </Routes>

        {/* Footer (Universal) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;