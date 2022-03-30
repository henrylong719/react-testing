import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);
  const button = screen.getByRole('button', {
    name: /change to Midnight Blue/i,
  });
  expect(button).toHaveStyle('background-color: MediumVioletRed');

  fireEvent.click(button);

  expect(button).toHaveStyle('background-color: MidnightBlue');

  expect(button.textContent).toBe('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);
  const button = screen.getByRole('button', {
    name: /change to Midnight Blue/i,
  });

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox enables button', () => {
  render(<App />);
  const button = screen.getByRole('button', {
    name: /change to Midnight Blue/i,
  });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  expect(button).not.toBeDisabled();

  fireEvent.click(checkbox);

  expect(button).toBeDisabled();

  fireEvent.click(checkbox);

  expect(button).toBeEnabled();
});

test('Disable button has gray background and revert to MediumVioletRed', () => {
  render(<App />);
  const button = screen.getByRole('button', {
    name: /change to Midnight Blue/i,
  });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle('background-color: gray');

  fireEvent.click(checkbox);

  expect(button).toHaveStyle('background-color: MediumVioletRed');
});

test('Disable button has gray background and revert to MidnightBlue', () => {
  render(<App />);
  const button = screen.getByRole('button', {
    name: /change to Midnight Blue/i,
  });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  fireEvent.click(button);

  fireEvent.click(checkbox);

  expect(button).toHaveStyle('background-color: gray');

  fireEvent.click(checkbox);

  expect(button).toHaveStyle('background-color: MidnightBlue');
});

// Unit Testing Functions

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('red')).toBe('red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('RedGreen')).toBe('Red Green');
  });

  test('Works for two inner capital letters', () => {
    expect(replaceCamelWithSpaces('RedGreenBlue')).toBe('Red Green Blue');
  });
});
