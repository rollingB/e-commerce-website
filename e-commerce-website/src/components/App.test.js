mport { render, screen } from '@testing-library/react';
import Signup_component from './Auth/Signup';

test('renders learn react link', () => {
  render(<Signup_component />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
