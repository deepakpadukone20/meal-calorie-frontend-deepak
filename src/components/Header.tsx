"use client";

import Link from 'next/link';
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
        <Image alt="meal" src="/orange.svg" width={40} height={40} />
        <h1 className="text-lg font-semibold">Meal Tracker</h1>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        {user ? (
          <>
            <span className='hidden sm:inline'>
              Logged in as <strong>{user.firstName} {user.lastName}</strong>
            </span>
            <Button variant="outline" onClick={logout}>Logout</Button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:underline">Login</Link>
            <Link href="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}
