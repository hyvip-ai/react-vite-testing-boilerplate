import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Components Tests', () => {
  it('should render developed by rajat', () => {
    render(<App />);
    const textElement = screen.getByText(/developed by rajat/i);
    expect(textElement).toBeInTheDocument();
  });
  it('should not render learn react', () => {
    render(<App />);
    const textElement = screen.queryByText(/learn react/i);
    expect(textElement).not.toBeInTheDocument();
  });
});
