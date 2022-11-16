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
        name_ja={information.name_ja}
        name_en={information.name_en}
        account={information.account}
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
        name_ja={information.name_ja}
        name_en={information.name_en}
        account={information.account}
        appBarDataTestId={appBarDataTestId}
      />
    );
    const appBar = screen.queryByTestId(appBarDataTestId)
    expect(appBar).not.toBeNull();
  });
});
