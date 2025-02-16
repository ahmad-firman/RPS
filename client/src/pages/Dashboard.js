// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import CardStat from '../components/CardStat'; // pastikan sudah diimpor

function Dashboard() {
  const ipk = 3.91;
  const semester = 8;
  const sks = 81;

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="stats-container">
          <CardStat title="IPK" value={ipk} />
          <CardStat title="Semester" value={semester} />
          <CardStat title="SKS Total" value={sks} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
