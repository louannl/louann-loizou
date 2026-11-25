import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('keeps the portfolio links usable without WebGL', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Louann Robbins' })).toBeInTheDocument();
  const career = screen.getAllByRole('link', { name: 'Career' }).find(link => link.hasAttribute('data-glass-host'));
  expect(career).toHaveAttribute('href', '#career');
  expect(document.getElementById('career')).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: 'GitHub' })[0]).toHaveAttribute('href', 'https://github.com/louannl');
});

test('opens the mobile navigation and closes it after a section is selected', () => {
  render(<App />);

  const menu = screen.getByRole('button', { name: 'Open menu' });
  expect(menu).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(menu);
  expect(menu).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'Home' }));
  expect(menu).toHaveAttribute('aria-expanded', 'false');
});
