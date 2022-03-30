import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const newColor = color === 'red' ? 'blue' : 'red';

  return (
    <>
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(newColor)}
      >
        Change to {newColor}
      </button>
    </>
  );
}

export default App;
