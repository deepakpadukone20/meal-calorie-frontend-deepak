'use client';
import React from 'react';

import { useMealStore } from '@/stores/mealStore';

export function MealHistory() {
  const { history, clearHistory } = useMealStore();

  if (history.length === 0) {
    return <p className="mt-4 text-sm text-gray-500">No meal history yet.</p>;
  }

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Meal History</h2>
        <button
          onClick={clearHistory}
          className="text-sm text-red-500 underline hover:text-red-700"
        >
          Clear History
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-2 py-1 border">Dish</th>
              <th className="px-2 py-1 border">Servings</th>
              <th className="px-2 py-1 border">Calories/Serving</th>
              <th className="px-2 py-1 border">Total</th>
              <th className="px-2 py-1 border">Time</th>
            </tr>
          </thead>
          <tbody>
            {history.map((meal, index) => (
              <tr key={index} className="border-t">
                <td className="px-2 py-1 border">{meal.dishName}</td>
                <td className="px-2 py-1 border text-center">{meal.servings}</td>
                <td className="px-2 py-1 border text-center">{meal.calories_per_serving}</td>
                <td className="px-2 py-1 border text-center">{meal.total_calories}</td>
                <td className="px-2 py-1 border text-xs text-gray-500">{new Date(meal.timestamp).toLocaleTimeString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}