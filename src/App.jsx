
import "./App.css"

import React, { useState } from 'react';

 
const App = () => {
  const [count, setCount] = useState(0);
 
  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Hisoblagich</h2>

    <div className="display-section">
          <h1 className={`count-number ${count > 0 ? 'positive' : count < 0 ? 'negative' : ''}`}>
            {count}
          </h1>
        </div>

        <div className="button-group">
          <button 
            className="btn btn-fruit" 
            onClick={() => setCount(count + 1)}
          >
            🍎 Mevalar
          </button>

          <button 
            className="btn btn-veggie" 
            onClick={() => setCount(count - 1)}
          >
            🥦 Sabzavotlar
          </button>

          </div>

        <button className="btn-reset" onClick={() => setCount(0)}>
          Tozalash (Reset)
        </button>

        </div>
    </div>
  );
};


export default App;




const InfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
 
  return (
    <div className="modal-overlay" onClick={onClose}></div>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Xabar</h3>
        <p>Bu faqat modal oynasi. Buni o'zing xohlagan ma'lumotlar bilan to'ldirishing mumkin.</p>
        <button className="btn-close" onClick={onClose}>Yopish</button>
      </div>
    </div>