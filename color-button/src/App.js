import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(str) {
  return str.replace(/([A-Z])/g, ' $1').trim();
}

function App() {
  const [color, setColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);
  const newColor =
    color === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <>
      <button
        style={{ backgroundColor: disabled ? 'gray' : color }}
        onClick={() => setColor(newColor)}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newColor)}
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
