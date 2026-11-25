import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeAll, beforeEach, expect, test, vi } from 'vitest';
import App from './App';

beforeAll(() => {
  window.matchMedia = () => ({ matches: false });
  Element.prototype.scrollIntoView = () => {};
  Element.prototype.getAnimations = () => [];
});

beforeEach(() => {
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
});

afterEach(() => {
  vi.restoreAllMocks();
});

test('keeps the portfolio links usable without WebGL', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Louann Robbins' })).toBeInTheDocument();
  const career = screen.getAllByRole('link', { name: 'Career' }).find(link => link.hasAttribute('data-glass-host'));
  expect(career).toHaveAttribute('href', '#career');
  expect(document.getElementById('career')).toBeInTheDocument();
  const profiles = within(screen.getByRole('group', { name: 'Social profiles' }));
  expect(profiles.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/louannl');
  expect(profiles.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/louann-loizou');
});

test('opens the mobile navigation and closes it after a section is selected', async () => {
  render(<App />);
  const home = document.getElementById('home');
  home.scrollIntoView = vi.fn();

  const menu = screen.getByRole('button', { name: 'Main navigation' });
  expect(menu).not.toHaveAttribute('aria-expanded', 'true');
  fireEvent.pointerDown(menu, { button: 0 });
  fireEvent.click(menu);
  expect(menu).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(await screen.findByRole('menuitem', { name: 'Home' }));
  expect(home.scrollIntoView).toHaveBeenCalled();
  expect(menu).not.toHaveAttribute('aria-expanded', 'true');
});

test('filters the career timeline and restores every entry with All', () => {
  render(<App />);

  const filters = within(screen.getByRole('radiogroup', { name: 'Filter career timeline' }));
  expect(filters.getByRole('radio', { name: 'All' })).toHaveAttribute('aria-checked', 'true');
  expect(screen.getByText('Monitoring Platforms...')).toBeInTheDocument();

  fireEvent.click(filters.getByRole('radio', { name: 'Projects' }));
  expect(screen.getByText('Uni Takeaway')).toBeInTheDocument();
  expect(screen.getByText('Meal Planner + API')).toBeInTheDocument();
  expect(screen.queryByText('Monitoring Platforms...')).not.toBeInTheDocument();

  fireEvent.click(filters.getByRole('radio', { name: 'All' }));
  expect(screen.getByText('Monitoring Platforms...')).toBeInTheDocument();
});

test('shows the full list of skills in a dismissible popover', async () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'See all skills for Monitoring Platforms...' }));
  const skills = within(await screen.findByRole('dialog', { name: 'Skills' }));
  expect(skills.getByText('Terraform')).toBeInTheDocument();
  expect(skills.getAllByText('Prometheus')).toHaveLength(1);

  fireEvent.click(skills.getByRole('button', { name: 'Done' }));
  await waitFor(() => expect(screen.queryByRole('dialog', { name: 'Skills' })).not.toBeInTheDocument());
});
