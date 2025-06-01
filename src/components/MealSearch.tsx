'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getCalories } from '@/lib/api';
import { ResultCard } from '@/components/ResultCard';
import { toast } from 'sonner';

export function MealSearch() {
  const [dishName, setDishName] = useState('');
  const [servings, setServings] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dishName || servings <= 0) return;
    setLoading(true);
    setResult(null);

    try {
      const data = await getCalories(dishName, servings);
      setResult(data);
      toast(
         `${data.total_calories} total calories for ${data.servings} servings.`,
      );
    } catch (err: any) {
      toast(
        err.message,
       
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex p-3 flex-col gap-4 w-full max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Input
          type="text"
          placeholder="Enter dish name"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
          className="flex-1"
          required
        />
        <Input
          type="number"
          placeholder="Servings"
          min={1}
          value={servings}
          onChange={(e) => setServings(Number(e.target.value))}
          className="w-24"
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </Button>
      </div>
      {(result || loading) && <ResultCard result={result} loading={loading} />}
    </form>
  );
}
