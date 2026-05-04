 import React from 'react';
import './Modal.css';

const Modal = () => {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Hisoblagich</h2>
        
        <h1 className={`count-number ${count > 0 ? 'positive' : count < 0 ? 'negative' : ''}`}>
          {count}
        </h1>

        <button className="btn" onClick={() => setCount(count + 1)}>🍎 Mevalar</button>
        <button className="btn" onClick={() => setCount(count - 1)}>🥦 Sabzavotlar</button>
        <button className="btn-reset" onClick={() => setCount(0)}>Tozalash</button>
        
       
        <button className="btn-info" onClick={() => setIsModalOpen(true)}>
          Modalni ko'rsat
        </button>
      </div>

      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Salom!</h2>
        <p>Bu alohida fayldan kelayotgan modal oynasi.</p>
      </Modal>
    </div>
  );
};

export default  Modal;