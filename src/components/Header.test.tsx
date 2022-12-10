import Header from './Header';
import { render, screen } from '@testing-library/react';
import { information } from '../Information';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  test('PCのとき，AppBarが表示されない', () => {
    const appBarDataTestId = 'test-app-bar'
    render(
      <Header
        isPC={true}
        name_ja={information.author.ja}
        name_en={information.author.en}
        github={information.author.github}
        appBarDataTestId={appBarDataTestId}
      />
    );
    const appBar = screen.queryByTestId(appBarDataTestId)
    expect(appBar).toBeNull();
  });

  test('PCでないとき，AppBarが表示', () => {
    const appBarDataTestId = 'test-app-bar'
    render(
      <Header
        isPC={false}
        name_ja={information.author.ja}
        name_en={information.author.en}
        github={information.author.github}
        appBarDataTestId={appBarDataTestId}
      />
    );
    const appBar = screen.queryByTestId(appBarDataTestId)
    expect(appBar).not.toBeNull();
  });
});
