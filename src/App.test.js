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

test('initial conditions', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /change to blue/i });

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox enables button', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /change to blue/i });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  expect(button).not.toBeDisabled();

  fireEvent.click(checkbox);

  expect(button).toBeDisabled();

  fireEvent.click(checkbox);

  expect(button).toBeEnabled();
});

test('Disable button has gray background and revert to red', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /change to blue/i });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle('background-color: gray');

  fireEvent.click(checkbox);

  expect(button).toHaveStyle('background-color: red');
});

test('Disable button has gray background and revert to blue', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /change to blue/i });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  fireEvent.click(button);

  fireEvent.click(checkbox);

  expect(button).toHaveStyle('background-color: gray');

  fireEvent.click(checkbox);

  expect(button).toHaveStyle('background-color: blue');
});
