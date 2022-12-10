import Header from './Header';
import { render, screen } from '@testing-library/react';
import { information } from '../Information';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  test('PCのとき，AppBarが表示されない', () => {
    const appBarDataTestId = 'test-app-bar';
    render(<Header isPC={true} appBarDataTestId={appBarDataTestId} />);
    const appBar = screen.queryByTestId(appBarDataTestId);
    expect(appBar).toBeNull();
  });

  test('PCでないとき，AppBarが表示', () => {
    const appBarDataTestId = 'test-app-bar';
    render(<Header isPC={false} appBarDataTestId={appBarDataTestId} />);
    const appBar = screen.queryByTestId(appBarDataTestId);
    expect(appBar).not.toBeNull();
  });
});
