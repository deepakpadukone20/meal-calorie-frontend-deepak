import { create } from 'zustand'

type Meal = {
  dishName: string
  servings: number
  calories_per_serving: number
  total_calories: number
  timestamp: string
}

type MealStore = {
  history: Meal[]
  addMeal: (meal: Omit<Meal, 'timestamp'>) => void
  clearHistory: () => void
}

export const useMealStore = create<MealStore>((set) => ({
  history: [],
  addMeal: (meal) =>
    set((state) => ({
      history: [
        { ...meal, timestamp: new Date().toISOString() },
        ...state.history.slice(0, 9),
      ],
    })),
  clearHistory: () => set({ history: [] }),
}))