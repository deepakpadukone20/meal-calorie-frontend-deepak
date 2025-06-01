'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';
import { withAuthGuard } from '@/lib/withAuthGuard';
import { MealSearch } from '@/components/MealSearch';
import Image from 'next/image';
import { MealHistory } from '@/components/MealHistory';

function DashboardPage() {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 rounded-xl shadow-md max-w-md w-full text-center">
        <div className='flex justify-center'>
        <Image alt="meal" src="/meal.svg" width={100} height={100} />
        </div>
        <MealSearch />
        <MealHistory />
      </div>
    </div>
  );
}

export default withAuthGuard(DashboardPage);