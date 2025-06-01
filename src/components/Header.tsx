"use client";

import { useAuthStore } from '@/stores/authStore';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import Image from 'next/image';

export function Header() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);


  return (
    <div
      className="sticky top-0 z-50 w-full px-4 py-3 border-b shadow-sm text-sm flex justify-between items-center bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="flex items-center gap-2">
        {user ? <Image alt="meal" src="/orange.svg" width={40} height={40} /> : null}
        <h1 className="text-lg font-semibold">Meal Tracker</h1>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        {user ? (
          <>
            <span className='hidden sm:inline'>
              Logged in as <strong>{user.firstName} {user.lastName}</strong>
            </span>
            <Button className='hover:bg-gray-300 hover:text-gray-800' onClick={logout}>Logout</Button>
          </>
        ) : (
          <>
          </>
        )}
      </div>
    </div>
  );
}
