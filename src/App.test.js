import { render, screen, within } from '@testing-library/react';
import App from './App';
import { archiveProjects, featuredProjects } from './constant/projects';

const renderAt = (path) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

test('home page renders the name and every section', () => {
  renderAt('/');

  expect(screen.getByRole('heading', { level: 1, name: /hunter dong/i })).toBeInTheDocument();
  for (const name of ['About', 'Experience', 'Projects']) {
    expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument();
  }
});

test('each featured project has one link and descriptive alt text', () => {
  renderAt('/');

  for (const project of featuredProjects) {
    const card = screen.getByRole('heading', { level: 3, name: project.title }).closest('article');
    expect(within(card).getAllByRole('link')).toHaveLength(1);
    expect(within(card).getByRole('img')).toHaveAttribute('alt', project.imageAlt);
  }
});

test('archive lists every project', () => {
  renderAt('/archive');

  expect(screen.getByRole('heading', { level: 1, name: /all projects/i })).toBeInTheDocument();
  // One header row plus one row per project.
  expect(screen.getAllByRole('row')).toHaveLength(archiveProjects.length + 1);
});

test('unknown routes show the not found page', () => {
  renderAt('/does-not-exist');

  expect(screen.getByRole('heading', { level: 1, name: /page not found/i })).toBeInTheDocument();
});
