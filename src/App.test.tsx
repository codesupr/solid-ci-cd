import { render } from 'solid-testing-library';
import { describe, expect, test } from 'vitest';
import App from './App';

describe('<App />', () => {
  test('should render a link to the docs', () => {
    const { getByText, unmount } = render(() => <App />);
    expect(getByText(/Learn Solid/)).toBeInTheDocument();
    unmount();
  });
});