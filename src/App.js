import './App.css';
import React, { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let color = 'green';
  if (count >= 5 && count <= 9) {
    color = 'blue';
  } else if (count === 10) {
    color = 'red';
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: color, margin: '0 20px' }}>{count}</h1>
      <button style={{ backgroundColor: '#fff', border: '2px solid #ccc', fontSize: '24px', padding: '10px', cursor: 'pointer' }} onClick={increment}>+</button>
      <button style={{ backgroundColor: '#fff', border: '2px solid #ccc', fontSize: '24px', padding: '10px', cursor: 'pointer' }} onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;