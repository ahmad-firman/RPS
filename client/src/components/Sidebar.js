// src/components/Sidebar.js
import React from 'react';
import '../App.css';


function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>Dashboard</li>
        <li>Rencana Studi</li>
        <li>Kartu Hasil Studi</li>
        <li>...</li>
      </ul>
    </div>
  );
}

export default Sidebar;