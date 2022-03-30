import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /change to blue/i });
  expect(button).toHaveStyle('background-color: red');

  fireEvent.click(button);

  expect(button).toHaveStyle('background-color: blue');

  expect(button.textContent).toBe('Change to red');
});
