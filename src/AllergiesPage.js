import React, { useState } from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import Sidebar from './SideBar';
import './AllergiesPage.css';

function AllergiesPage(isSidebarOpen) {
  const selectedSection = 'Allergies'; // Set the selected section

  return (
    <div className="allergies-page">
      {/* Top Bar */}
      <TopBar />

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        selectedSection={selectedSection} // Pass the selected section
      />

      {/* Main Content */}
      <div className="main-content">
        <h2>Allergies</h2>
        <div className="section-content">
          <table className="allergies-table">
            <thead>
              <tr>
                <th>Allergy</th>
                <th>Medication</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pollen</td>
                <td>Antihistamines</td>
              </tr>
              <tr>
                <td>Peanuts</td>
                <td>Epinephrine</td>
              </tr>
              <tr>
                <td>Dust Mites</td>
                <td>Nasal Corticosteroids</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AllergiesPage;