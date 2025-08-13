import { render, screen} from '@testing-library/react';
import Header from './index';

test('renders header text', () => {
  render(<Header />);
  
  expect(screen.getByRole('heading', { name: /blablabla/i })).toBeInTheDocument();
});