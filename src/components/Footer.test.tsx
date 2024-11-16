import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  test('年が最新のものになっているか', () => {
    const dataTestId = 'test-copy-right';
    render(<Footer dataTestId={dataTestId} />);
    const copyRight = screen.getByTestId(dataTestId);
    // 最新の年の文字列を含むか確認
    expect(copyRight.textContent).toMatch(String(new Date().getFullYear()));
  });
});
