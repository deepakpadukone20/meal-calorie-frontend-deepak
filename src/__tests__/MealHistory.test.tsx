import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { useMealStore } from '@/stores/mealStore';
import { MealHistory } from '@/components/MealHistory';

beforeEach(() => {
  useMealStore.setState({
    history: [
      {
        dishName: 'Pizza',
        servings: 2,
        calories_per_serving: 300,
        total_calories: 600,
        timestamp: new Date().toISOString(),
      },
    ],
  });
});

describe('MealHistory component', () => {
  it('renders the meal history table with one entry', () => {
    render(<MealHistory />);

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();

    const rows = within(table).getAllByRole('row');
    expect(rows.length).toBeGreaterThan(1); // includes header + data

    expect(screen.getByText('Pizza')).toBeInTheDocument();
    expect(screen.getByText('600')).toBeInTheDocument();
  });

  it('renders empty message when no history exists', () => {
    useMealStore.setState({ history: [] });
    render(<MealHistory />);

    expect(screen.getByText(/No meal history yet/i)).toBeInTheDocument();
  });
});
