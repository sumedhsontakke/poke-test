import { render, screen } from '@testing-library/react';
import App from './App';

test('Apply filter test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Apply Filter/i);
  expect(linkElement).toBeInTheDocument();
});
