import React, { useState } from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import Sidebar from './SideBar';
import './PrescriptionsPage.css';

function PrescriptionsPage(isSidebarOpen) {
  const selectedSection = 'Prescriptions'; // Set the selected section

  // Sample data for prescriptions
  const prescriptionsData = [
    {
      id: 1,
      medication: 'Paracetamol',
      dosage: '500mg',
      frequency: 'Twice a day',
      prescribedBy: 'Dr. John Doe',
      date: '2023-01-15',
    },
    {
      id: 2,
      medication: 'Amoxicillin',
      dosage: '250mg',
      frequency: 'Three times a day',
      prescribedBy: 'Dr. Jane Smith',
      date: '2023-02-10',
    },
    {
      id: 3,
      medication: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once a day',
      prescribedBy: 'Dr. Emily Brown',
      date: '2023-03-05',
    },
  ];

  return (
    <div className="prescriptions-page">
      {/* Top Bar */}
      <TopBar />

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        selectedSection={selectedSection} // Pass the selected section
      />

      {/* Main Content */}
      <div className="main-content">
        <h2>Prescriptions</h2>
        <div className="section-content">
          <table className="prescriptions-table">
            <thead>
              <tr>
                <th>Medication</th>
                <th>Dosage</th>
                <th>Frequency</th>
                <th>Prescribed By</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {prescriptionsData.map((prescription) => (
                <tr key={prescription.id}>
                  <td>{prescription.medication}</td>
                  <td>{prescription.dosage}</td>
                  <td>{prescription.frequency}</td>
                  <td>{prescription.prescribedBy}</td>
                  <td>{prescription.date}</td>
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

export default PrescriptionsPage;