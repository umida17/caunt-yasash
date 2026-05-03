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

          
export default App;

 