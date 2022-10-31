import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AboutUS from './index';

describe('index', () => {
  it('renders App component', () => {
    render (<AboutUS />);
    screen.debug();
    expect(screen.getByText(/Here must be a page/i)).toBeInTheDocument();
  });
});
