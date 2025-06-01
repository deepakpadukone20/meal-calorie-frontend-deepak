'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';

export function withAuthGuard<P>(Component: React.ComponentType<P>) {
  return function GuardedComponent(props: P) {
    const router = useRouter();
    const user = useAuthStore((state) => state.user);

    useEffect(() => {
      if (!user) {
        router.push('/login');
      }
    }, [user, router]);

    if (!user) return null;
    return <Component {...props} />;
  };
}