import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeAll, beforeEach, expect, test, vi } from 'vitest';
import App from './App';
import { projects } from './data/projects.mjs';

beforeAll(() => {
  window.matchMedia = () => ({ matches: false, addEventListener: () => {}, removeEventListener: () => {} });
  Element.prototype.scrollIntoView = () => {};
  Element.prototype.getAnimations = () => [];
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute('open', '');
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute('open');
  };
});

beforeEach(() => {
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

const renderPortfolio = (path = '/') => render(
  <MemoryRouter initialEntries={[path]}>
    <App />
  </MemoryRouter>,
);

test('keeps the portfolio links usable without WebGL', () => {
  renderPortfolio();

  expect(screen.getByRole('heading', { name: 'Louann Robbins' })).toBeInTheDocument();
  const exploreProjects = screen.getByRole('link', { name: 'Explore projects' });
  expect(exploreProjects).toHaveAttribute('href', '/#projects');
  fireEvent.click(exploreProjects);
  expect(document.getElementById('projects')).toBeInTheDocument();
  const profiles = within(screen.getByRole('group', { name: 'Social profiles' }));
  expect(profiles.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/louannl');
  expect(profiles.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/louann-loizou');
});

test('uses every unique project tag in the hero backdrop', () => {
  const { container } = renderPortfolio();
  const rows = [...container.querySelectorAll('.portfolio-stack-row')];
  const labels = rows.flatMap(row => [...row.firstElementChild.children].map(chip => chip.textContent));
  const projectTags = new Set(projects.flatMap(project => project.skills));

  expect(rows).toHaveLength(4);
  expect(labels).toHaveLength(projectTags.size);
  expect(new Set(labels)).toEqual(projectTags);
  expect(screen.queryByRole('button', { name: 'Pause motion' })).not.toBeInTheDocument();
});

test('opens the mobile navigation and closes it after a section is selected', async () => {
  renderPortfolio();
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

test('switches between the projects grid and the compact career history', () => {
  renderPortfolio();

  const views = within(screen.getByRole('radiogroup', { name: 'Portfolio view' }));
  expect(views.getByRole('radio', { name: 'Career' })).toHaveAttribute('aria-checked', 'true');
  expect(screen.getByRole('heading', { name: 'Season History' })).toBeInTheDocument();
  expect(screen.getAllByText('Promotion')).toHaveLength(2);
  expect(screen.getByRole('link', { name: 'Load testing a game backend' })).toHaveAttribute('href', '/?project=game-backend-load-testing');
  expect(screen.queryByRole('heading', { name: 'Game platform observability' })).not.toBeInTheDocument();

  fireEvent.click(views.getByRole('radio', { name: 'Projects' }));
  expect(screen.getByRole('heading', { name: 'Game platform observability' })).toBeInTheDocument();

  fireEvent.click(views.getByRole('radio', { name: 'Career' }));
  expect(screen.getByRole('heading', { name: 'Season History' })).toBeInTheDocument();
});

test('opens a case study over projects and leaves the view in place on close', async () => {
  renderPortfolio('/#projects');
  window.scrollTo.mockClear();

  const opener = screen.getByRole('link', { name: 'Read case study: Uni Takeaway' });
  fireEvent.click(opener);
  const popup = within(await screen.findByRole('dialog', { name: 'Uni Takeaway' }));
  expect(popup.getByRole('heading', { name: 'The challenge' })).toBeInTheDocument();
  expect(popup.getByRole('img', { name: 'Screenshot of the redesigned Uni Takeaway website' })).toBeInTheDocument();

  fireEvent.click(popup.getByRole('button', { name: 'Close case study' }));
  await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  expect(screen.getByRole('radio', { name: 'Projects' })).toHaveAttribute('aria-checked', 'true');
  expect(opener).toHaveFocus();
  expect(window.scrollTo).not.toHaveBeenCalled();
});

test('opens a shared case study over Career and dismisses it on cancel', async () => {
  renderPortfolio('/?project=meal-planner#career');

  const popup = await screen.findByRole('dialog', { name: 'Meal Planner + API' });
  fireEvent(popup, new Event('cancel', { cancelable: true }));
  await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  expect(screen.getByRole('radio', { name: 'Career' })).toHaveAttribute('aria-checked', 'true');
});

test('opens the career view from its original fragment link', () => {
  renderPortfolio('/#career');
  expect(screen.getByRole('radio', { name: 'Career' })).toHaveAttribute('aria-checked', 'true');
  expect(document.getElementById('career')).toBeInTheDocument();
});

test('shows the full list of skills in a dismissible popover', async () => {
  renderPortfolio('/#projects');

  fireEvent.click(screen.getByRole('button', { name: 'See all skills for Game platform observability' }));
  const skills = within(await screen.findByRole('dialog', { name: 'Skills' }));
  expect(skills.getByText('Terraform')).toBeInTheDocument();
  expect(skills.getAllByText('Prometheus')).toHaveLength(1);

  fireEvent.click(skills.getByRole('button', { name: 'Done' }));
  await waitFor(() => expect(screen.queryByRole('dialog', { name: 'Skills' })).not.toBeInTheDocument());
});
