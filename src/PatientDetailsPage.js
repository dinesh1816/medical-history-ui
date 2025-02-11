import React from 'react';
import { useParams } from 'react-router-dom';
import './PatientDetailsPage.css';

function PatientDetailsPage() {
  const { patientId } = useParams(); // Get the patient ID from the URL

  // Hardcoded patient data
  const patientData = {
    PAT123456: {
      name: 'John Doe',
      age: 35,
      gender: 'Male',
      allergies: [
        { allergy: 'Pollen', medication: 'Antihistamines' },
        { allergy: 'Peanuts', medication: 'Epinephrine' },
      ],
      surgeries: [
        { surgeryName: 'Appendectomy', date: '2022-03-15', surgeon: 'Dr. John Doe' },
      ],
      diseases: [
        { diseaseName: 'Diabetes', diagnosisDate: '2020-05-10', status: 'Active' },
      ],
      prescriptions: [
        { medication: 'Paracetamol', dosage: '500mg', frequency: 'Twice a day' },
      ],
    },
  };

  const patient = patientData[patientId];

  if (!patient) {
    return (
      <div className="patient-details-page">
        <div className="details-container">
          <h2>Patient Not Found</h2>
          <p>No patient found with the ID: {patientId}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="patient-details-page">
      <div className="details-container">
        <h2>Patient Details</h2>
        <div className="patient-info">
          <h3>Personal Information</h3>
          <p><strong>Name:</strong> {patient.name}</p>
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
        </div>

        <div className="medical-info">
          <h3>Allergies</h3>
          <table className="medical-table">
            <thead>
              <tr>
                <th>Allergy</th>
                <th>Medication</th>
              </tr>
            </thead>
            <tbody>
              {patient.allergies.map((allergy, index) => (
                <tr key={index}>
                  <td>{allergy.allergy}</td>
                  <td>{allergy.medication}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="medical-info">
          <h3>Surgeries</h3>
          <table className="medical-table">
            <thead>
              <tr>
                <th>Surgery Name</th>
                <th>Date</th>
                <th>Surgeon</th>
              </tr>
            </thead>
            <tbody>
              {patient.surgeries.map((surgery, index) => (
                <tr key={index}>
                  <td>{surgery.surgeryName}</td>
                  <td>{surgery.date}</td>
                  <td>{surgery.surgeon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="medical-info">
          <h3>Diseases</h3>
          <table className="medical-table">
            <thead>
              <tr>
                <th>Disease Name</th>
                <th>Diagnosis Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {patient.diseases.map((disease, index) => (
                <tr key={index}>
                  <td>{disease.diseaseName}</td>
                  <td>{disease.diagnosisDate}</td>
                  <td>{disease.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="medical-info">
          <h3>Prescriptions</h3>
          <table className="medical-table">
            <thead>
              <tr>
                <th>Medication</th>
                <th>Dosage</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              {patient.prescriptions.map((prescription, index) => (
                <tr key={index}>
                  <td>{prescription.medication}</td>
                  <td>{prescription.dosage}</td>
                  <td>{prescription.frequency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PatientDetailsPage;