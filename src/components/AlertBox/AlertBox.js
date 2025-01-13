import React from 'react';
import './style.css';

export default function AlertBox({ message, type }) {
  return (
    <div className={`alert-box ${type}`}>
      {message}
    </div>
  );
}
