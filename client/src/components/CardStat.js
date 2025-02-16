// src/components/CardStat.js
import React from 'react';
import '../App.css';


function CardStat({ title, value }) {
  return (
    <div className="card-stat">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default CardStat;
