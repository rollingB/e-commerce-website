import { render, screen } from '@testing-library/react';
import Loginpage from './loginpage';

test('renders learn react link', () => {
  render(<Loginpage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
