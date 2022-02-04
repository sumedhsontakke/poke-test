import { render, screen } from '@testing-library/react';
import { Details } from './index';




describe('Details page', () => {

  const localStorageMock = (() => {
    let store = {
      url: "www.google.com/test/tes1/"
    };
  
    return {
      getItem(key) {
        return store[key] || null;
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      removeItem(key) {
        delete store[key];
      },
      clear() {
        store = {};
      }
    };
  })();
  
  Object.defineProperty(window, 'sessionStorage', {
    value: localStorageMock
  });


  test('renders without error', () => {
    render(<Details />);
  });

  it('veify class container class name', () => {
    const handler = jest.fn();
    const { container } = render(<Details />);
    expect(container.firstChild).toHaveClass('detail-page');
   });  
});
