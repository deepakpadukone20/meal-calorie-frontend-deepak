'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';
import { MealSearch } from '@/components/MealSearch';
import Image from 'next/image';

export default function DashboardPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 rounded-xl shadow-md max-w-md w-full text-center">
        <div className='flex justify-center'>
        <Image alt="meal" src="/meal.svg" width={100} height={100} />
        </div>
        <MealSearch />
      </div>
    </div>
  );
}