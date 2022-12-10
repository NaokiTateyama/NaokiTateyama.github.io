import Footer from './Footer';
import { render, screen } from '@testing-library/react';
import { information } from '../Information';

describe('Footer', () => {
  test('年が最新のものになっているか', () => {
    const dataTestId = 'test-copy-right';
    render(<Footer name_en={information.author.en} dataTestId={dataTestId} />);
    const copyRight = screen.getByTestId(dataTestId);
    // 最新の年の文字列を含むか確認
    expect(copyRight.textContent).toMatch(String((new Date()).getFullYear()));
  });
});
