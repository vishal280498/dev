import React from 'react';
import './GradientButton.css';

export default function GradientButton(props) {
  return (
    <div className='btn-log'>
      <button className="global-btn">{props?.text}</button></div>
  );
}