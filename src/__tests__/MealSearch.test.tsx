import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import { MealSearch } from '@/components/MealSearch';

describe('MealSearch component', () => {
  it('renders input and button', () => {
    render(<MealSearch />);
    expect(screen.getByPlaceholderText(/Enter dish name/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument();
  });

  it('accepts input and submits', async () => {
    render(<MealSearch />);
    const input = screen.getByPlaceholderText(/Enter dish name/i);
    const button = screen.getByRole('button', { name: /Search/i });

    await userEvent.type(input, 'Pizza');
    await userEvent.click(button);

    expect(input).toHaveValue('Pizza');
  });
});