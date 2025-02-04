import React, { useState } from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import Sidebar from './SideBar';
import './SurgeriesPage.css';

function SurgeriesPage(isSidebarOpen) {
  const selectedSection = 'Surgeries'; // Set the selected section

  // Sample data for surgeries
  const surgeriesData = [
    {
      id: 1,
      surgeryName: 'Appendectomy',
      date: '2022-03-15',
      hospital: 'City General Hospital',
      surgeon: 'Dr. John Doe',
    },
    {
      id: 2,
      surgeryName: 'Knee Replacement',
      date: '2021-08-22',
      hospital: 'Green Valley Hospital',
      surgeon: 'Dr. Jane Smith',
    },
    {
      id: 3,
      surgeryName: 'Cataract Surgery',
      date: '2023-01-10',
      hospital: 'Sunrise Eye Clinic',
      surgeon: 'Dr. Emily Brown',
    },
  ];

  return (
    <div className="surgeries-page">
      {/* Top Bar */}
      <TopBar />

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        selectedSection={selectedSection} // Pass the selected section
      />

      {/* Main Content */}
      <div className="main-content">
        <h2>Surgeries</h2>
        <div className="section-content">
          <table className="surgeries-table">
            <thead>
              <tr>
                <th>Surgery Name</th>
                <th>Date</th>
                <th>Hospital</th>
                <th>Surgeon</th>
              </tr>
            </thead>
            <tbody>
              {surgeriesData.map((surgery) => (
                <tr key={surgery.id}>
                  <td>{surgery.surgeryName}</td>
                  <td>{surgery.date}</td>
                  <td>{surgery.hospital}</td>
                  <td>{surgery.surgeon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SurgeriesPage;