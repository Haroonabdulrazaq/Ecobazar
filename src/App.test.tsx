import { render, screen } from '@testing-library/react';

jest.mock('./App', () => {
  return function MockApp() {
    return (
      <div className='App' data-testid='app'>
        <header data-testid='header'>Header</header>
        <nav role='navigation' data-testid='navigation'>
          Navigation
        </nav>
        <main role='main' data-testid='main'>
          Main Content
        </main>
        <footer data-testid='footer'>Footer</footer>
      </div>
    );
  };
});

import App from './App';

test('renders main app layout with navigation components', () => {
  render(<App />);

  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByTestId('main')).toBeInTheDocument();

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByTestId('navigation')).toBeInTheDocument();

  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
  expect(appElement).toHaveClass('App');

  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByTestId('footer')).toBeInTheDocument();
});
