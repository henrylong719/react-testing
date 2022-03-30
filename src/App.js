import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newColor = color === 'red' ? 'blue' : 'red';

  return (
    <>
      <button
        style={{ backgroundColor: disabled ? 'gray' : color }}
        onClick={() => setColor(newColor)}
        disabled={disabled}
      >
        Change to {newColor}
      </button>

      <input
        id="disable-button-checkbox"
        defaultChecked={disabled}
        type="checkbox"
        onClick={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </>
  );
}

export default App;
