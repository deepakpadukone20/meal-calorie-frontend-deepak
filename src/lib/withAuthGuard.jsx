'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';

export function withAuthGuard(Component) {
  const GuardedComponent = (props) => {
    const user = useAuthStore((state) => state.user);
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push('/login');
      }
    }, [user, router]);

    if (!user) return null;

    return <Component {...props} />;
  };

  return GuardedComponent;
}
