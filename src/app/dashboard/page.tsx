'use client'; 
import { withAuthGuard } from '@/lib/withAuthGuard';
import { MealSearch } from '@/components/MealSearch';
import { MealHistory } from '@/components/MealHistory';
import Image from 'next/image';

function DashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 rounded-xl shadow-md max-w-md w-full text-center">
        <div className="flex justify-center">
          <Image alt="meal" src="/meal.svg" width={100} height={100} />
        </div>
        <MealSearch />
        <MealHistory />
      </div>
    </div>
  );
}

export default withAuthGuard(DashboardPage); 