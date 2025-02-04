import React, { useState } from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import Sidebar from './SideBar';
import './DiseasesPage.css';

function DiseasesPage(isSidebarOpen) {
  const selectedSection = 'Diseases'; // Set the selected section

  // Sample data for diseases
  const diseasesData = [
    {
      id: 1,
      diseaseName: 'Diabetes',
      diagnosisDate: '2020-05-10',
      status: 'Active',
      treatment: 'Insulin Therapy',
    },
    {
      id: 2,
      diseaseName: 'Hypertension',
      diagnosisDate: '2019-08-22',
      status: 'Controlled',
      treatment: 'Medication (Amlodipine)',
    },
    {
      id: 3,
      diseaseName: 'Asthma',
      diagnosisDate: '2021-03-15',
      status: 'Active',
      treatment: 'Inhalers (Salbutamol)',
    },
  ];

  return (
    <div className="diseases-page">
      {/* Top Bar */}
      <TopBar />

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        selectedSection={selectedSection} // Pass the selected section
      />

      {/* Main Content */}
      <div className="main-content">
        <h2>Diseases</h2>
        <div className="section-content">
          <table className="diseases-table">
            <thead>
              <tr>
                <th>Disease Name</th>
                <th>Diagnosis Date</th>
                <th>Status</th>
                <th>Treatment</th>
              </tr>
            </thead>
            <tbody>
              {diseasesData.map((disease) => (
                <tr key={disease.id}>
                  <td>{disease.diseaseName}</td>
                  <td>{disease.diagnosisDate}</td>
                  <td>{disease.status}</td>
                  <td>{disease.treatment}</td>
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

export default DiseasesPage;